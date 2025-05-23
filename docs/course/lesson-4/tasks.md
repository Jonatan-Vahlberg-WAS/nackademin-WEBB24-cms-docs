---
sidebar_position: 4
title: Uppgifter
en_title_slug: tasks
---

## **Gruppuppgift: Deploya en PostgreSQL-databas med Docker**

I denna uppgift ska ni skapa och köra en PostgreSQL-databas i en Docker-container samt ansluta till den via en klient.

### **Steg 1: Skapa en Docker Compose-fil**

För att hantera databasen på ett smidigt sätt använder vi **Docker Compose**.

1. Skapa en ny mapp för projektet:
    
    ```bash
    mkdir docker-postgres && cd docker-postgres
    
    ```
    
2. Skapa en fil med namnet `docker-compose.yml` och lägg till följande innehåll:
    
    ```yaml
    version: '3.8'
    
    services:
      postgres:
        image: postgres:15
        container_name: my_postgres_db
        restart: always
        environment:
          POSTGRES_USER: admin
          POSTGRES_PASSWORD: password123
          POSTGRES_DB: my_database
        ports:
          - "5432:5432"
        volumes:
          - pg_data:/var/lib/postgresql/data
    
    volumes:
      pg_data:
    
    ```
    
    **Förklaring av konfigurationen:**
    
    - Vi använder **PostgreSQL 15** som databasimage.
    - Databasen startas automatiskt om den kraschar.
    - En volym skapas (`pg_data`) för att lagra databasen så att data inte försvinner vid omstart.
    - PostgreSQL exponeras på port **5432**.

---

### **Steg 2: Starta databasen**

1. Starta PostgreSQL-databasen genom att köra:
    
    ```bash
    docker-compose up -d
    
    ```
    
    **Flaggan `-d`** gör att containern körs i bakgrunden.
    
2. Kontrollera att containern körs:
    
    ```bash
    docker ps
    
    ```
    
    Du bör se en container med namnet `my_postgres_db` som körs på port **5432**.
    

---

### **Steg 3: Anslut till databasen**

### **Anslut via terminal**

Använd följande kommando för att ansluta direkt till databasen i containern:

```bash
docker exec -it my_postgres_db psql -U admin -d my_database

```

Du ska nu vara inne i PostgreSQL-kommandoraden och kan köra SQL-kommandon, t.ex.:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE NOT NULL
);

```

För att avsluta, skriv:

```sql
\q

```

---

### **Anslut via en klient (pgAdmin eller DBeaver)**

1. Ladda ner och installera **pgAdmin** eller **DBeaver** om du inte redan har det.
2. Skapa en ny anslutning och ange följande:
    - **Host**: `localhost`
    - **Port**: `5432`
    - **Database**: `my_database`
    - **User**: `admin`
    - **Password**: `password123`
3. Anslut och verifiera att databasen fungerar genom att köra en enkel SQL-fråga.

---

### **Steg 4: Stänga ner databasen**

När ni är klara kan ni stoppa och ta bort databasen genom att köra:

```bash
docker-compose down
```

Om ni även vill ta bort all data:

```bash
docker-compose down -v
```

---

# **Hemuppgift: Koppla en Dockeriserad Express-server till en PostgreSQL-databas**

## **Mål**

I denna hemuppgift ska du skapa en **Express-server** och koppla den till en **PostgreSQL-databas** med hjälp av **Sequelize**. Du kan välja att antingen:

- **Dockerisera både Express och PostgreSQL med Docker Compose**, eller
- **Enbart Dockerisera Express om PostgreSQL-databasen redan körs från gruppuppgiften**.

---

## **Steg 1: Förbered projektet**

1. Skapa en ny projektmapp:
    
    ```bash
    mkdir docker-express-sequelize && cd docker-express-sequelize
    
    ```
    
2. Skapa en undermapp för din **Express-applikation**:
    
    ```bash
    mkdir server && cd server
    
    ```
    
3. Initiera ett nytt **Node.js-projekt** och installera beroenden:
    
    ```bash
    npm init -y
    npm install express sequelize pg pg-hstore dotenv
    
    ```
    
4. Skapa en fil `.env` för att lagra miljövariabler:
    
    ```
    DB_NAME=my_database
    DB_USER=admin
    DB_PASSWORD=password123
    DB_HOST=postgres
    DB_PORT=5432
    PORT=3000
    
    ```
    
    > Om du redan har en PostgreSQL-databas körande från gruppuppgiften, uppdatera DB_HOST till rätt värdnamn eller IP-adress.
    > 

---

## **Steg 2: Konfigurera Sequelize**

1. Skapa en mapp `models` och en fil `models/index.js`:
    
    ```bash
    mkdir models
    touch models/index.js
    ```
    
2. Öppna `models/index.js` och lägg till följande kod för att konfigurera Sequelize:
    
    ```jsx
    require('dotenv').config();
    const { Sequelize } = require('sequelize');
    
    const sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            dialect: 'postgres'
        }
    );
    
    const testConnection = async () => {
        try {
            await sequelize.authenticate();
            console.log('✅ Ansluten till PostgreSQL!');
        } catch (error) {
            console.error('❌ Misslyckad anslutning:', error);
        }
    };
    
    testConnection();
    
    module.exports = sequelize;
    
    ```
    
3. Skapa en modell för användare i `models/user.js`:
    
    ```jsx
    const { DataTypes } = require('sequelize');
    const sequelize = require('./index');
    
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
    
    module.exports = User;
    
    ```
    

---

## **Steg 3: Skapa Express-server**

1. Skapa filen `server.js`:
    
    ```bash
    touch server.js
    
    ```
    
2. Lägg till följande kod i `server.js` för att skapa API-rutter:
    
    ```jsx
    require('dotenv').config();
    const express = require('express');
    const sequelize = require('./models/index');
    const User = require('./models/user');
    
    const app = express();
    const port = process.env.PORT || 3000;
    
    app.use(express.json());
    
    // Synkronisera modellen med databasen
    sequelize.sync({ force: true }).then(() => {
        console.log('🔄 Databasen synkroniserad');
    });
    
    // Testendpoint
    app.get('/', (req, res) => {
        res.send('Express + PostgreSQL + Sequelize via Docker!');
    });
    
    // Hämta alla användare
    app.get('/users', async (req, res) => {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).send('Fel vid hämtning av användare');
        }
    });
    
    // Skapa en ny användare
    app.post('/users', async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).send('Fel vid skapande av användare');
        }
    });
    
    app.listen(port, () => {
        console.log(`🚀 Servern körs på port ${port}`);
    });
    
    ```
    

---

## **Steg 4: Skapa Docker Compose-fil (valfritt om PostgreSQL redan körs)**

Om du vill **dockerisera både Express och PostgreSQL**, skapa en `docker-compose.yml`-fil i projektets rotmapp:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15
    container_name: my_postgres_db
    restart: always
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: password123
      POSTGRES_DB: my_database
    ports:
      - "5432:5432"
    volumes:
      - pg_data:/var/lib/postgresql/data

  express:
    build: ./server
    container_name: my_express_server
    restart: always
    environment:
      - DB_NAME=my_database
      - DB_USER=admin
      - DB_PASSWORD=password123
      - DB_HOST=postgres
      - DB_PORT=5432
      - PORT=3000
    ports:
      - "3000:3000"
    depends_on:
      - postgres

volumes:
  pg_data:

```

> Om du redan har en PostgreSQL-container körande från gruppuppgiften, kan du utesluta postgres-tjänsten och uppdatera DB_HOST i .env så att Express ansluter till den befintliga databasen.
> 

---

## **Steg 5: Starta upp containrarna**

- Om du **vill köra både PostgreSQL och Express med Docker Compose**, starta tjänsterna med:
    
    ```bash
    docker-compose up -d
    
    ```
    
- Om du **bara vill Dockerisera Express** och PostgreSQL redan körs, bygg och kör Express-container separat:
    
    ```bash
    cd server
    docker build -t my-express-server .
    docker run -p 3000:3000 --env-file .env my-express-server
    
    ```
    

---

# **Extra uppgifter**

Om du vill utmana dig ytterligare kan du prova följande:

### 🛑 Lägg till en **DELETE-route**

Implementera en route i **Express** för att ta bort en användare baserat på **ID**.

📌 **Testa med en DELETE-förfrågan från Postman eller curl:**

```bash
curl -X DELETE http://localhost:3000/users/1

```

---

### 🔄 Lägg till en **UPDATE-route (PUT)**

Skapa en endpoint i **Express** för att uppdatera en användares information.

📌 **Exempel på test med curl:**

```bash
curl -X PUT http://localhost:3000/users/1 -H "Content-Type: application/json" -d '{"name": "Nytt namn"}'

```

---

### ✅ Implementera **datavalidering med Sequelize**

Se till att:

- **Inga** användare kan skapas utan **namn och e-post**.
- **E-postadressen** är unik.
- Eventuella **valideringsfel** hanteras korrekt.

---

### 🐳 Lägg till **pgAdmin i Docker Compose**

Utöka din `docker-compose.yml`-fil genom att lägga till en **pgAdmin-container**, så att du kan hantera databasen via en webbläsare.

📌 **pgAdmin bör vara åtkomlig på:**

🔗 `http://localhost:5050`

---

### 📌 Skapa en **relationsmodell**

1. **Lägg till en ny modell** för `Posts` i din databas.
2. **Skapa en relation** mellan `Users` och `Posts` (en användare kan ha flera inlägg).
3. **Testa** att skapa och hämta inlägg som är kopplade till en användare.

---