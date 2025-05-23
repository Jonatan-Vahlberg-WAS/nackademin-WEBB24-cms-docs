---
sidebar_position: 2
title: Versionshantering och Git
en_title_slug: version-control-and-git
---

[Git & Git workflow](https://h9gng3.csb.app/git-workflow.html)

## Introduktion till versionshantering

Versionshantering är en metod för att spåra och hantera ändringar i filer och projekt. Det används främst inom mjukvaruutveckling för att organisera kod och underlätta samarbete. Med versionshantering kan utvecklare arbeta parallellt, spåra ändringar och återställa tidigare versioner vid behov.

---

## Versionshanteringssystem: Centraliserat vs. Distribuerat

Det finns två typer av versionshanteringssystem:

- **Centraliserade system (CVCS)**: En central server hanterar hela projektets historik, och alla användare hämtar och skickar sina ändringar till denna. Exempel: **Subversion (SVN)**.
- **Distribuerade system (DVCS)**: Varje utvecklare har en fullständig kopia av projektets historik lokalt, vilket möjliggör arbete offline. Exempel: **Git, Mercurial**.

Git är det mest använda systemet idag tack vare sin flexibilitet och stöd för distribuerat arbete.

---

## Grundläggande begrepp i Git

- **Repository**: Lagringsplats för projektets filer och historik.
- **Commit**: En sparad förändring i projektet.
- **Branch**: En parallell version av koden för att möjliggöra isolerat arbete.
- **Merge**: Att sammanfoga ändringar från en branch till en annan.
- **Pull request**: En begäran om att få föra in ändringar i huvudprojektet.
- **Clone**: Att skapa en kopia av ett repository lokalt.
- **Conflict**: När två ändringar inte kan slås ihop automatiskt och kräver manuell lösning.

---

## Installation och konfiguration av Git

### Installation av Git

Ladda ner och installera Git från:

🔗 https://git-scm.com/

### Konfigurera användarinformation

Ställ in ditt användarnamn och din e-postadress:

```bash
git config --global user.name "Ditt Användarnamn"
git config --global user.email "din@email.com"

```

Verifiera inställningarna:

```bash
git config --global --get user.name
git config --global --get user.email

```

Om du vill konfigurera Git för ett specifikt projekt, kör kommandona inuti projektmappen utan `--global`:

```bash
cd din-projektmapp
git config user.name "Ditt Användarnamn"
git config user.email "din@email.com"

```

---

## Användning av Git: Grundläggande kommandon

### Initiera ett Git-repository

Skapa ett nytt Git-repository:

```bash
git init
```

### Lägga till och spara ändringar

Lägg till en fil i versionshanteringen:

```bash
git add filnamn
#eller
git add .
```

Spara ändringen med en commit:

```bash
git commit -m "Beskrivning av ändringen"
```

### Visa status och historik

Se aktuell status i ditt repository:

```bash
git status
```

Visa commit-historiken:

```bash
git log
```

### Arbeta med grenar

Skapa en ny branch:

```bash
git branch ny-branch
```

Byt till den nya branchen:

```bash
git checkout ny-branch
```

Skapa och byt branch i samma veva

```bash
git checkout -b ny-branch

```

Gå tillbaka till föregående branch

```bash
git checkout - # shorthand for git checkout @{-1}
```

Sammanfoga en branch med `main`:

```bash
git merge ny-branch
```

---

## Samarbete med Git

Git används ofta med fjärrservrar som **GitHub, GitLab** eller **Bitbucket** för att möjliggöra samarbete.

### Länka ett lokalt repository till en fjärrserver

Koppla ditt projekt till en fjärrserver:

```bash
git remote add origin https://github.com/användarnamn/repository.git
```

### Ladda upp ändringar till fjärrservern

Push:a lokala ändringar till fjärrservern:

```bash
git push origin main
```

### Hämta uppdateringar från fjärrservern

Hämta senaste ändringarna:

```bash
git pull origin main # Branch optional if you are on that branch
```

### Kloning av ett repository

Ladda ner en kopia av ett befintligt projekt:

```bash
git clone https://github.com/användarnamn/repository.git
```

---