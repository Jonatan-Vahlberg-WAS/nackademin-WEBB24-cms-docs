---
sidebar_position: 3
title: Sätt upp TypeScript
description: Hur kan vi sätta upp en typescript-miljö i React?
toc_max_heading_level: 3
---

### Sätt upp TypeScript i node miljön

Börja med att skapa en ny mapp och öppna den i VS Code.

```bash
mkdir typescript-project
cd typescript-project
```

Installera typescript och skapa en tsconfig.json fil.

```bash
npm init -y
npm install typescript --save-dev
npx tsc --init
```

Med detta har vi skapat en `tsconfig.json` fil som vi kan använda för att konfigurera TypeScript.

```json
{
  "compilerOptions": {
    "target": "ES2016",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["./**/*"],
  "exclude": ["node_modules", "dist"],
  ...
}
```

Skapa en ny fil med namnet `index.ts` och skriv in följande kod:

```ts
console.log("Hello World");
```

Kör koden med följande kommando:

```bash
npx tsc
```

Du bör se en ny fil med namnet `index.js` i mappen.

```bash
node index.js
```

Du bör se utskriften "Hello World" i konsolen.

### Sätt upp TypeScript i React (Vite)

```bash
npx create-vite@latest my-app --template react-ts
```
