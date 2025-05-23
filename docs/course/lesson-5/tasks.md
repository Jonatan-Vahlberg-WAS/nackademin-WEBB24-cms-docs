---
sidebar_position: 3
title: Uppgifter
en_title_slug: tasks
---

## Gruppuppgift: Kör er Dockeriserade Express + PostgreSQL-applikation i Kubernetes

Ni har tidigare **Dockeriserat en Express-server** och kopplat den till en **PostgreSQL-databas**. Nu är det dags att ta det ett steg längre genom att använda **Kubernetes** och **Minikube** för att orkestrera era containers. Syftet är att ni ska få öva på att:

1. **Sätta upp** ett lokalt Kubernetes-kluster (Minikube).
2. **Skriva YAML-manifest** för att skapa Deployments och Services för både applikationen och databasen.
3. **Köra** er Docker-image i klustret och verifiera att applikationen kommunicerar korrekt med PostgreSQL.

---

### Översikt

1. **Återanvänd** er redan befintliga Dockeriserade Express-applikation och PostgreSQL-lösning.
2. **Bygg** eventuellt uppdaterade Docker-images om ni har gjort ändringar i er kod.
3. **Skapa** nödvändiga Kubernetes-manifest (YAML-filer) för båda containrarna.
4. **Exponera** applikationen via en Service i Kubernetes och testa endpoints.
5. **Dokumentera** hur man startar och kör allt i Minikube.

---

### Steg 1: Förberedelser

1. **Installera Minikube** om ni inte redan har det.
2. **Verifiera** att ni kan köra `minikube start` och `kubectl get nodes` utan fel.
3. Se över **era Dockerfiler** för Express-applikationen och PostgreSQL. Om ni redan använder den officiella Postgres-bilden behöver ni bara en Dockerfil för Express.

> Tips: Ni behöver inte bygga om PostgreSQL-databasens bild om ni kör den officiella postgres:15.
> 

---

### Steg 2: Publicera (eller behåll lokalt) era Docker-images

- **Alternativ A**: Publicera era images på Docker Hub (eller liknande registry) om ni vill.
- **Alternativ B**: Bygg och använd lokala images i Minikube genom att köra:
    
    ```bash
    eval $(minikube docker-env)
    docker build -t my-express-app:1.0 .
    
    ```
    

> Se till att klustret kan hitta era images (antingen via Docker Hub eller genom lokalt buildade images i Minikube-miljön).
> 

---

### Steg 3: Skapa Kubernetes-manifest för Express-applikationen

1. **Deployment** (ex. `express-deployment.yaml`):
    
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: express-deployment
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: express-app
      template:
        metadata:
          labels:
            app: express-app
        spec:
          containers:
            - name: express-container
              image: my-express-app:1.0
              ports:
                - containerPort: 3000
              env:
                - name: DB_USER
                  value: admin
                - name: DB_PASSWORD
                  value: password123
                - name: DB_NAME
                  value: my_database
                - name: DB_HOST
                  value: postgres-service
                - name: DB_PORT
                  value: "5432"
    
    ```
    
2. **Service** (ex. `express-service.yaml`):
    
    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: express-service
    spec:
      type: NodePort
      selector:
        app: express-app
      ports:
        - protocol: TCP
          port: 80           # Service-port
          targetPort: 3000   # Container-port
          nodePort: 30001    # Port för åtkomst via Minikube
    
    ```
    

---

### Steg 4: Skapa Kubernetes-manifest för PostgreSQL

1. **Deployment** (ex. `postgres-deployment.yaml`):
    
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: postgres-deployment
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: postgres
      template:
        metadata:
          labels:
            app: postgres
        spec:
          containers:
            - name: postgres-container
              image: postgres:15
              ports:
                - containerPort: 5432
              env:
                - name: POSTGRES_USER
                  value: admin
                - name: POSTGRES_PASSWORD
                  value: password123
                - name: POSTGRES_DB
                  value: my_database
    
    ```
    
2. **Service** (ex. `postgres-service.yaml`):
    
    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: postgres-service
    spec:
      type: ClusterIP
      selector:
        app: postgres
      ports:
        - protocol: TCP
          port: 5432
          targetPort: 5432
    
    ```
    

---

### Steg 5: Applicera era YAML-filer i Minikube

1. **Starta** Minikube om det inte redan är igång:
    
    ```bash
    minikube start
    
    ```
    
2. **Applicera** manifesten:
    
    ```bash
    kubectl apply -f postgres-deployment.yaml
    kubectl apply -f postgres-service.yaml
    kubectl apply -f express-deployment.yaml
    kubectl apply -f express-service.yaml
    
    ```
    
3. **Kolla status**:
    
    ```bash
    kubectl get pods
    kubectl get services
    
    ```
    
    Ni bör se:
    
    - `express-deployment-xxxxx` (Running)
    - `postgres-deployment-xxxxx` (Running)
    - `express-service` (NodePort)
    - `postgres-service` (ClusterIP)

---

### Steg 6: Testa er applikation

1. **Hämta URL och port** via Minikube:
    
    ```bash
    minikube service express-service --url
    
    ```
    
    Ni får något i stil med `http://192.168.49.2:30001`.
    
2. **Testa endpoints** (t.ex. `/users`, `/posts`, etc.):
    
    ```bash
    curl http://192.168.49.2:30001/users
    
    ```
    
3. **Felsök** om något inte fungerar:
    - `kubectl logs <pod-namn>` för att se loggar från er Express-container.
    - `kubectl exec -it <postgres-pod> -- bash` för att ansluta till Postgres-containern och köra `psql -U admin -d my_database`.

---

### Steg 7: Dokumentera projektet

1. **README** eller liknande fil där ni beskriver:
    - **Hur man startar** Minikube och applicerar manifesten.
    - **Vilka endpoints** som finns i Express-applikationen.
    - **Hur databasen** är uppsatt och eventuella tabeller som behöver skapas.