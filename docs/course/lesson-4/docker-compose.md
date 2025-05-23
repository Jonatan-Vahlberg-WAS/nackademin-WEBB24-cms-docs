---
sidebar_position: 3
title: Docker Compose
en_title_slug: docker-compose
---

## Docker Compose – Hantering av flera containrar

### Vad är Docker Compose?

Docker Compose är ett verktyg som används för att definiera och hantera flercontainermiljöer i Docker. Istället för att starta varje container manuellt kan du definiera en hel applikationsmiljö i en YAML-fil och starta allt med ett enda kommando.

### Fördelar med Docker Compose

- **Automatiserad hantering**: Starta flera tjänster samtidigt med en enda konfigurationsfil.
- **Enkel konfiguration**: Beskriv hela din applikationsstack i en YAML-fil.
- **Lätt att dela**: Andra utvecklare kan snabbt replikera din miljö genom att köra samma Compose-fil.
- **Miljöhantering**: Stöd för att definiera miljövariabler för att anpassa miljöer (t.ex. utveckling, test och produktion).

---

### Skapa en Docker Compose-fil

För att använda Docker Compose skapar du en fil med namnet **docker-compose.yml** i ditt projekt.

Exempel: En enkel webbapplikation med **Node.js** och en **MongoDB-databas**:

```yaml
version: "3.8"

services:
  app:
    image: node:18
    container_name: my-node-app
    working_dir: /app
    volumes:
      - .:/app
    ports:
      - "3000:3000"
    depends_on:
      - mongo
    command: "npm start"

  mongo:
    image: mongo:latest
    container_name: my-mongo-db
    ports:
      - "27017:27017"

```

I detta exempel:

- **app**tjänsten använder en Node.js-image och startar applikationen i `/app`.
- **mongo**tjänsten kör en MongoDB-container och exponerar port **27017**.
- `depends_on` ser till att MongoDB startas innan Node.js-applikationen.

---

### Starta och hantera Docker Compose

1. **Starta alla tjänster**:
    
    ```bash
    docker-compose up -d
    
    ```
    
    - `d` kör tjänsterna i bakgrunden.
2. **Lista alla tjänster som körs**:
    
    ```bash
    docker-compose ps
    
    ```
    
3. **Stoppa alla tjänster**:
    
    ```bash
    docker-compose down
    
    ```
    
4. **Visa loggar för en tjänst**:
    
    ```bash
    docker-compose logs app
    
    ```
    
5. **Bygga om och starta om containrar** (om du har gjort ändringar):
    
    ```bash
    docker-compose up --build
    
    ```
    

---

### Sammanfattning

- Docker Compose används för att hantera applikationer med flera containrar.
- En **docker-compose.yml**fil definierar vilka tjänster som ska köras.
- Med enkla kommandon kan du starta, stoppa och hantera alla tjänster samtidigt.
- **depends_on** ser till att tjänster startas i rätt ordning.

Docker Compose gör det enklare att hantera applikationer som består av flera beroenden, vilket gör det till ett kraftfullt verktyg för utveckling och drift.