---
sidebar_position: 2
title: Docker
en_title_slug: docker
---

## Vad är Docker?

Docker är en plattform för att skapa, distribuera och köra applikationer i isolerade miljöer som kallas **containers**. Med Docker kan utvecklare paketera en applikation och dess beroenden i en enhetlig miljö som fungerar likadant oavsett var den körs—lokalt, på en server eller i molnet.

---

## Fördelar med Docker

- **Portabilitet**: Eftersom applikationer körs i containers fungerar de på samma sätt oavsett underliggande operativsystem.
- **Resurseffektivitet**: Docker-containrar är lättviktiga och delar samma operativsystemskärna, till skillnad från virtuella maskiner som kräver separata OS-inställningar.
- **Skalbarhet**: Containers kan enkelt replikeras och hanteras i större system med hjälp av orkestreringsverktyg som **Docker Compose** eller **Kubernetes**.
- **Snabb distribution**: Applikationer kan snabbt startas, stoppas och flyttas mellan olika miljöer.
- **Isolering**: Varje container körs separat, vilket minskar risken för att program påverkar varandra.

---

## Hur fungerar Docker?

Docker bygger på tre centrala begrepp:

1. **Images** – En image är en färdigbyggd mall som innehåller all kod, beroenden och instruktioner för att köra en applikation.
2. **Containers** – En container är en körbar instans av en image. Den skapar en isolerad miljö där applikationen kan köras.
3. **Docker Hub** – En onlineplattform där färdiga Docker-images kan delas och laddas ner.

När en container startas används en image som grund, vilket gör att miljön alltid är densamma.

---

## Installation av Docker

Följande steg visar hur du installerar Docker på din dator:

### Windows och Mac

1. Ladda ner **Docker Desktop** från [Docker's officiella webbplats](https://www.docker.com/products/docker-desktop).
2. Installera programmet och följ instruktionerna.
3. Starta Docker Desktop och verifiera att det fungerar genom att köra:
    
    ```bash
    docker --version
    ```
    

---

## Skapa och köra en container

Efter installationen kan du köra din första Docker-container.

1. Öppna terminalen och kör följande kommando:
    
    ```bash
    docker run hello-world
    ```
    
    Detta laddar ner och kör en enkel Docker-image som testar installationen.
    
2. För att lista alla körande containrar:
    
    ```bash
    docker ps
    ```
    
3. För att lista alla containrar (även stoppade):
    
    ```bash
    docker ps -a
    
    ```
    
4. För att stoppa en container:
    
    ```bash
    docker stop <container_id>
    
    ```
    

---

## Docker Images och Docker Hub

En **image** är en färdig konfiguration av en applikation. Docker Hub är en central plats där utvecklare kan lagra och hämta images.

1. **Hämta en befintlig image**:
    
    ```bash
    docker pull nginx
    
    ```
    
2. **Köra en image som en container**:
    
    ```bash
    docker run -d -p 8080:80 nginx
    
    ```
    
    Detta startar en webbserver i en container och gör den tillgänglig på `http://localhost:8080`.
    
3. **Bygga en egen Docker-image**
    
    Skapa en fil `Dockerfile`:
    
    ```
    FROM node:18
    WORKDIR /app
    COPY . .
    RUN npm install
    CMD ["node", "index.js"]
    
    ```
    
    Bygg en image från `Dockerfile`:
    
    ```bash
    docker build -t my-app .
    
    ```
    
    Kör den skapade imagen:
    
    ```bash
    docker run -p 3000:3000 my-app
    
    ```
    

---

## Sammanfattning

- Docker gör det möjligt att skapa och köra applikationer i isolerade containrar.
- Containers är lättviktiga, skalbara och fungerar på olika system.
- Docker Hub är en plattform för att dela och hämta images.
- Med Docker kan du snabbt sätta upp och driftsätta applikationer i olika miljöer.

---