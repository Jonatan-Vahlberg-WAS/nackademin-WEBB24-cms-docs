---
sidebar_position: 2
title: Kubernetes
en_title_slug: kubernetes
---

## Vad är Kubernetes?

Kubernetes (förkortat **K8s**) är ett **containerorkestreringsverktyg** som hjälper utvecklare och driftteam att hantera, skala och automatisera distributionen av containerbaserade applikationer.

Det skapades av Google och är idag **standardplattformen** för att hantera containrar i både moln- och lokala miljöer.

### Hur fungerar Kubernetes?

Kubernetes körs på en **klusterbaserad arkitektur**, där flera noder samarbetar för att hantera containrar. Den ser till att:

- Applikationer **alltid körs** och **återstartas vid fel**.
- **Lastbalansering** används för att hantera trafik.
- Systemet kan **skala upp och ner** vid behov.

---

## Varför Kubernetes?

Även om Docker gör det enkelt att skapa och köra enskilda containrar, finns det **flera utmaningar** när vi vill hantera större applikationer:

✅ **Automatisk hantering** av krascher – Kubernetes startar om felaktiga containers.

✅ **Skalbarhet** – Nya containers kan startas automatiskt baserat på trafik.

✅ **Lastbalansering** – Fördelar inkommande trafik mellan flera instanser.

✅ **Versionshantering & uppdateringar** – Gör det enkelt att uppdatera applikationer utan driftstopp.

---

## Grundläggande begrepp i Kubernetes

### Pods

Den minsta enheten i Kubernetes. En **pod** innehåller en eller flera containrar som delar nätverk och lagring.

### Nodes

Servrar (virtuella eller fysiska) där pods körs. Kubernetes-kluster består av **en master node** och flera **worker nodes**.

### Deployments

Definierar **hur många pods** som ska köras, vilka images de använder och hur de ska uppdateras.

### Services

Används för att **exponera** en applikation externt. En Service kan:

- Skapa en **intern IP-adress** för applikationen.
- Användas för **lastbalansering** mellan flera pods.

### Namespaces

Används för att **isolera resurser** i Kubernetes. Man kan ha t.ex. ett `dev`-namespace för utveckling och ett `prod`-namespace för produktion.

---

## Installera Kubernetes lokalt (Minikube)

För att testa Kubernetes lokalt kan vi använda **Minikube**, en lättviktsversion av Kubernetes som körs på en lokal virtuell maskin.

### Installera Minikube

**macOS:**

```bash
brew install minikube
```

**Windows:**

https://minikube.sigs.k8s.io/docs/start/?arch=%2Fwindows%2Fx86-64%2Fstable%2F.exe+download

### Starta Minikube

Efter installationen startar vi ett lokalt Kubernetes-kluster:

```bash
minikube start
alias kubectl="minikube kubectl --"

```

Vi kan nu kontrollera att Kubernetes körs:

```bash
kubectl get po -A
```

> kubectl är kommandoradsverktyget för att hantera Kubernetes.
> 

---

## Skapa och hantera en enkel applikation i Kubernetes

### Skapa en enkel Deployment

Vi ska köra en **Node.js-applikation** i Kubernetes.

1. Skapa en fil `deployment.yaml`:
    
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: my-app
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: my-app
      template:
        metadata:
          labels:
            app: my-app
        spec:
          containers:
            - name: my-app
              image: myusername/my-app:latest
              ports:
                - containerPort: 3000
    
    ```
    
2. **Deploya applikationen** i Kubernetes:
    
    ```bash
    kubectl apply -f deployment.yaml
    ```
    
3. **Kontrollera status:**
    
    ```bash
    kubectl get pods
    ```
    

---

### Exponera applikationen via en Service

För att göra applikationen tillgänglig externt skapar vi en **Service**.

1. Skapa en fil `service.yaml`:
    
    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: my-app-service
    spec:
      type: NodePort
      selector:
        app: my-app
      ports:
        - protocol: TCP
          port: 80
          targetPort: 3000
          nodePort: 30001
    
    ```
    
2. **Deploya service-filen**:
    
    ```bash
    kubectl apply -f service.yaml
    ```
    
3. **Hitta applikationens IP och port**:
    
    ```bash
    minikube service my-app-service --url
    ```
    
4. Öppna webbläsaren och besök den **URL** som visas.

---

## Köra en PostgreSQL-databas i Kubernetes

Vi kan även köra en databas i Kubernetes genom att skapa en **StatefulSet**.

1. Skapa en fil `postgres-deployment.yaml`:
    
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: postgres
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
            - name: postgres
              image: postgres:15
              env:
                - name: POSTGRES_USER
                  value: admin
                - name: POSTGRES_PASSWORD
                  value: password123
                - name: POSTGRES_DB
                  value: my_database
              ports:
                - containerPort: 5432
    ```
    
2. **Deploya PostgreSQL:**
    
    ```bash
    kubectl apply -f postgres-deployment.yaml
    ```
    
3. **Kontrollera att databasen körs:**
    
    ```bash
    kubectl get pods
    ```
    
4. **Anslut till databasen med en klient (t.ex. pgAdmin)** med:
    
    ```
    Host: <Podens IP>
    Port: 5432
    User: admin
    Password: password123
    Database: my_database
    ```
    

---

## **7. Sammanfattning**

✅ Kubernetes är ett **containerorkestreringsverktyg** som hjälper oss att hantera och skala containerbaserade applikationer.

✅ **Pods, Deployments och Services** är nyckelbegrepp inom Kubernetes.

✅ Vi kan **deploya applikationer och databaser** i Kubernetes med YAML-filer.

✅ Med **Minikube** kan vi testa Kubernetes lokalt innan vi deployar i molnet.

---