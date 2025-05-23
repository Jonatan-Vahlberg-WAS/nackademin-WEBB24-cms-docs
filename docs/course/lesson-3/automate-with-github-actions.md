---
sidebar_position: 4
title: Automatisera med GitHub Actions
en_title_slug: automate-with-github-actions
---

## Introduktion

Automatisering av tester är en viktig del av modern mjukvaruutveckling. Genom att använda **GitHub Actions** för kontinuerlig integration (CI) och **Jest** för enhetstester kan vi säkerställa att vår kodbas förblir stabil och att nya ändringar inte introducerar buggar.

I detta kapitel går vi igenom hur du sätter upp GitHub Actions för att automatiskt köra Jest-tester vid varje kodändring, med hjälp av följande repository som exempel: Se till att koden är uppdaterad

https://github.com/Jonatan-Vahlberg-WAS/core-academy

---

## Förberedelser

Innan vi skapar vårt GitHub Actions-arbetsflöde behöver vi säkerställa att projektet är korrekt inställt.

- **Jest:** Se till att **Jest** är installerat som en utvecklingsberoende i projektet. Om det inte redan är installerat, kör:
    
    ```bash
    npm install --save-dev jest
    ```
    
- **Testskript:** Lägg till ett testskript i `package.json` för att kunna köra testerna med kommandot `npm test`:
    
    ```json
    "scripts": {
      "test": "jest"
    }
    ```
    

---

## Skapa en GitHub Actions-arbetsflödesfil

För att automatisera testerna med GitHub Actions behöver vi skapa en arbetsflödesfil.

1. **Skapa mappstruktur:** I projektets rotkatalog, skapa en mapp som heter `.github/workflows`.
2. **Skapa arbetsflödesfil:** Inuti `workflows`mappen, skapa en fil med namnet `production_tests.yml`.

---

## Konfigurera arbetsflödet för att köra Jest-tester

I `.github/workflows/production_tests.yml`-filen, definiera arbetsflödet enligt följande:

```yaml
name: Production Tests

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 'lts/*'
      - name: Install dependencies
        run: npm install
      - name: Set up environment variables using Secrets
        run: |
          echo "JWT_SECRET=${{ secrets.JWT_SECRET }}" >> $GITHUB_ENV
      - name: Run tests
        run: npm run test
```

### **Vad gör detta arbetsflöde?**

✅ **Trigger:** Arbetsflödet körs vid varje **push eller pull request** till `main`-branchen.

✅ **Miljö:** Det körs på en **Ubuntu-server** i GitHub Actions-miljön.

✅ **Steg:**

- Hämtar den senaste versionen av koden.
- Installerar den senaste **LTS-versionen** av Node.js.
- Installerar projektets beroenden.
- Kör testerna med **Jest** (`npm test`).

### Lägg till Secret i github

I repot gå till S**ettings ⇒ Secrets and variables ⇒ Actions**

Lägg till en **secret** som heter `JWT_SECRET` värdet ska inte behövas eller bör vara samma som på dev eller production.

---

## Kontrollera arbetsflödets status

När du pushar ändringar till repositoryt kommer GitHub Actions automatiskt att köra arbetsflödet.

- **Status:** Du kan se arbetsflödets status under fliken **"Actions"** i ditt GitHub-repository.
- **Felsökning:** Om testerna misslyckas kan du klicka på arbetsflödet och granska loggarna för att identifiera problemet.

---