---
sidebar_position: 3
title: Grunderna inom Git
en_title_slug: git-basics
---
https://jonatan-vahlberg-was.github.io/nackademin-webb24-alm-showcase/git-basics.html


## Grundläggande Git-kommandon

Här är några viktiga Git-kommandon för att hantera versionshantering effektivt:

- **`git init`**: Initierar ett nytt Git-repository i den aktuella katalogen.
- **`git clone <repository_url>`**: Klonar ett befintligt Git-repository till din lokala dator.
- **`git add <filnamn>`**: Lägger till en specifik fil i stagingområdet. Använd `git add .` för att lägga till alla ändringar.
- **`git commit -m "Ditt meddelande här"`**: Sparar de tillagda ändringarna i en commit med en beskrivning.
- **`git status`**: Visar status för arbetskatalogen och vilka filer som ändrats.
- **`git pull origin <branch_namn>`**: Hämtar och integrerar de senaste ändringarna från fjärrservern.
- **`git push origin <branch_namn>`**: Skickar lokala commits till fjärrservern.
- **`git branch`**: Visar en lista över befintliga grenar och markerar den aktuella grenen.
- **`git checkout <branch_namn>`**: Byter till en annan gren. För att byta till en specifik commit, använd `git checkout <commit_hash>`.
- **`git merge <branch_namn>`**: Slår ihop en gren med den aktuella grenen.
- **`git log`**: Visar commit-historiken för projektet.

Dessa kommandon utgör en grundläggande uppsättning för att hantera ett Git-repository. Det finns dock många fler avancerade funktioner att utforska när du blir mer bekant med Git.

---

## `.gitignore` och hantering av ignorerade filer

`.gitignore` är en fil som används för att tala om för Git vilka filer och mappar som ska ignoreras. Detta är användbart för att undvika att versionshantera temporära filer, byggfiler eller känsliga konfigurationsfiler.

### Skapa och använda `.gitignore`

1. Skapa en fil med namnet `.gitignore` i projektets rotkatalog.
2. Lägg till regler i `.gitignore` för vilka filer eller mappar som ska ignoreras.

### Exempel på `.gitignore`

```
# Ignorera alla .log-filer
*.log

# Ignorera mappen "build"
build/

# Ignorera filen "config.ini"
config.ini

```

### Lägga till och committa `.gitignore`

När `.gitignore` är skapad och konfigurerad kan den läggas till i Git:

```bash
git add .gitignore
git commit -m "Lägg till .gitignore för att ignorera vissa filer och mappar"

```

### Kontrollera ignorerade filer

För att se vilka filer som ignoreras av `.gitignore`, använd `git status`.

Nu kommer Git att ignorera filer och mappar enligt de regler du definierat i `.gitignore`, vilket hjälper till att hålla ditt repository rent och organiserat.

---

## Hantering av merge conflicts

Ett **merge conflict** uppstår när två olika ändringar görs i samma del av en fil och Git inte kan avgöra vilken version som ska behållas.

### Så hanterar du ett merge conflict:

1. **Försök att genomföra en merge**
    
    ```bash
    git merge <branch_namn>
    
    ```
    
2. **Om en konflikt uppstår** får du ett meddelande som säger:
    
    ```
    CONFLICT (content): Merge conflict in <filnamn>
    
    ```
    
3. **Öppna filen med konflikten**
    
    Git markerar konflikten med:
    
    ```
    <<<<<<< HEAD
    Din kod
    =======
    Andra grenens kod
    >>>>>>> <branch_namn>
    
    ```
    
4. **Lös konflikten manuellt**
    - Välj vilken version av koden som ska behållas.
    - Ta bort konfliktmarkeringarna (`<<<<<<<`, `=======`, `>>>>>>>`).
5. **Lägg till och committa den lösta filen**
    
    ```bash
    git add <filnamn>
    git commit -m "Löste merge conflict i <filnamn>"
    
    ```
    

Nu är konflikten löst och du kan fortsätta arbeta!

---

## Pull Requests (PR)

En **Pull Request (PR)** används när du arbetar med ett fjärrrepository på plattformar som **GitHub, GitLab** eller **Bitbucket**. Det är en begäran om att föra in ändringar från en gren till en annan, oftast från en feature-branch till `main`.

### Steg för att skapa en Pull Request:

1. **Skapa en ny gren och byt till den**
    
    ```bash
    git checkout -b feature-branch
    
    ```
    
2. **Gör ändringar, lägg till och commit:a**
    
    ```bash
    git add .
    git commit -m "Lagt till en ny funktion"
    
    ```
    
3. **Push:a din branch till fjärrrepositoryt**
    
    ```bash
    git push origin feature-branch
    
    ```
    
4. **Gå till GitHub/GitLab och skapa en PR**
    - Öppna repositoryt på plattformen.
    - Klicka på **New Pull Request**.
    - Välj `feature-branch` som källgren och `main` som målggren.
    - Lägg till en beskrivning och klicka på **Create Pull Request**.
5. **Granska och godkänn PR**
    - Andra teammedlemmar kan kommentera och föreslå ändringar.
    - När PR är granskad kan den godkännas och **mergeas** in i `main`.
6. **Ta bort den gamla branchen**
    
    Efter att en PR har mergeats kan du ta bort den gamla feature-branchen:
    
    ```bash
    git branch -d feature-branch
    git push origin --delete feature-branch
    
    ```