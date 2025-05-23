---
sidebar_position: 4
title: Git Best Practices
en_title_slug: git-best-practices
---

För att arbeta effektivt med Git i team eller större projekt är det viktigt att följa gemensamma arbetsrutiner. Nedan följer etablerade best practices som gör arbetsflödet tydligare, hållbart och mer samarbetsvänligt.

---

## Använd tydliga och strukturerade branches

Att arbeta i rätt typ av branch och ge den ett tydligt, konsekvent namn gör det enklare att förstå vad som pågår i projektet.

## 📂 Vanliga typer av branches:

- **`feature/`** – Ny funktionalitet
    
    *Exempel:* `feature/add-login-form`
    
- **`bugfix/`** – Åtgärd av icke-kritisk bugg
    
    *Exempel:* `bugfix/fix-button-alignment`
    
- **`hotfix/`** – Kritisk buggfix som snabbt behöver in i produktion
    
    *Exempel:* `hotfix/fix-crash-on-startup`
    
- **`dev/`** – Branch för generell utveckling
    
    *Exempel:* `dev/api-integration`
    
- **`staging/`** – Branch för stagingmiljö innan release
    
    *Exempel:* `staging/release-v1.4`
    

### ✅ Tips för branch-namn:

- Använd engelska och beskrivande namn.
- Använd prefix som `feature/`, `bugfix/`, `hotfix/` etc.
- Separera ord med bindestreck ().
- Undvik otydliga namn som `test`, `fix` eller `ändringar`.

---

### ℹ️ `main` vs `master`

Historiskt sett använde Git `master` som standardbranch, men i moderna projekt (t.ex. GitHub) är det vanligare att använda **`main`**.

Det viktiga är att teamet är **överens om vilken branch som är huvudbranch** – och att den används konsekvent.

Om du arbetar med ett äldre repository kan huvudbranchen fortfarande heta `master`. Du kan kontrollera och byta namn med:

```bash
git branch -a                    # Lista alla grenar
git branch -m master main        # Byt namn lokalt

```

---

## Skriv tydliga commit-meddelanden

Ett bra commit-meddelande beskriver kort och tydligt *vad* som ändrats och *varför*. Det gör det enklare att läsa commit-historik och förstå ändringar över tid.

✅ Exempel:

```bash
git commit -m "Add form validation for email field"

```

❌ Dåligt exempel:

```bash
git commit -m "ändringar"

```

**Tips:** Använd engelska i imperativ form: *Add*, *Fix*, *Update*, *Remove*.

---

## Arbeta alltid i en separat branch

Jobba aldrig direkt i `main`. Skapa alltid en separat branch för nya funktioner, fixar eller experiment:

```bash
git checkout -b feature/add-user-profile
```

Det minskar risken för konflikter och gör det enkelt att skapa pull requests.

---

## Håll commits små och fokuserade

Varje commit bör endast innehålla ändringar som hör logiskt ihop. Undvik stora "allt-i-ett"-commits.

✅ Bättre:

- En commit för att skapa en komponent.
- En commit för att lägga till styling.

❌ Sämre:

- En commit med blandade ändringar, fixar och refaktorering.

---

## Lägg inte till genererade eller känsliga filer

Använd `.gitignore` för att exkludera:

- Genererade mappar: `build/`, `dist/`
- Beroenden: `node_modules/`
- Känslig information: `.env`, `config.json`

Det minskar risken för att oönskade eller farliga filer hamnar i repositoryt.

---

## Hämta alltid senaste ändringar innan du pushar

Se till att din branch är uppdaterad innan du pushar ändringar:

```bash
git pull origin <branch-name>

```

Det minskar risken för konflikter och säkerställer att du bygger vidare på aktuell kod.

---

## Använd pull requests för kodgranskning

Alla ändringar bör skickas in via en pull request (PR), även i mindre projekt. PRs möjliggör:

- Kodgranskning
- Dokumentation av ändringar
- Automatiserade tester (CI/CD)

**Tips för en bra pull request:**

- Beskriv *vad* som ändrats och *varför*.
- Använd tydlig titel, t.ex. `Add password reset flow`.
- Knyt gärna PR:n till en issue eller task.

---

## Ta bort inaktuella (stale) branches

Gamla branches som inte längre används bör tas bort, både lokalt och från fjärrrepositoryt. Det håller projektet organiserat.

✅ Bra praxis:

- Ta bort branches som har mergeats.
- Rensa bort grenar som varit inaktiva länge.

🛠 Kommandon:

```bash
# Lokalt
git branch -d feature/old-branch

# Fjärr
git push origin --delete feature/old-branch

```

📌 *Tips:* GitHub och GitLab visar stale branches i gränssnittet.

---