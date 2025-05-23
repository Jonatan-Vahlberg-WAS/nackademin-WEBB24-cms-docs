---
sidebar_position: 2
title: Vad är Application Lifecycle Management?,
description: Vad är ALM och hur kan vi använda det i fullstackutveckling?
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Timeline from '@site/src/components/TimeLine';
import CollapsibleCard from '@site/src/components/_library/CollapsibleCard/TWCollapsibleCard';

## 1. Introduktion

I denna lektion kommer vi att utforska *Application Lifecycle Management* (ALM) och dess centrala roll i modern mjukvaruutveckling. ALM är mycket mer än bara projektledning – det omfattar hela resan en applikation gör, från idé till avveckling. Genom att förstå ALM får utvecklingsteam möjlighet att arbeta mer strukturerat, minska felmarginaler och leverera mer värde till användare och intressenter.

Vi kommer att gå igenom:

- Vad ALM är och vilka delar det består av
- Hur ALM stödjer samarbete och effektivitet
- Exempel på verktyg och metoder inom ALM
- En verklighetsbaserad ALM-tidslinje

---

## 2. Vad är Application Lifecycle Management (ALM)?

**Definition:**

ALM (Application Lifecycle Management) är en helhetsstrategi för att hantera livscykeln hos en applikation. Det innefattar både processer, verktyg och människor, och sträcker sig från den första idéfasen till applikationens slutgiltiga avveckling.

![ALM-EN-nobackground.png](attachment:e0a4cc8a-d251-4b83-beeb-35d29a194d49:ALM-EN-nobackground.png)

### Faser i ALM:

1. **Planering & Kravinsamling** – Identifiera affärsbehov och definiera funktionella krav.
2. **Design & Arkitektur** – System- och användargränssnittsdesign samt teknisk arkitektur.
3. **Utveckling** – Kodning, implementation och versionshantering.
4. **Testning & QA** – Säkerställ att applikationen uppfyller krav och är stabil.
5. **Distribution** – Deployment, release management och övervakning.
6. **Underhåll** – Bugghantering, uppdateringar och förbättringar.
7. **Avveckling** – Planerad nedstängning eller migrering.

### Verktyg som stödjer ALM:

- Jira, Azure DevOps, trello och shortcut (kravhantering)
- GitHub, GitLab (versionskontroll)
- Jenkins, CircleCI (CI/CD)
- Postman, Selenium, Jest, python-test, super-test (testning)
- ServiceNow, Freshdesk (support)

---

## 3. ALM:s betydelse i mjukvaruutveckling

Ett välfungerande ALM-system skapar struktur i komplexa utvecklingsmiljöer. Det möjliggör spårbarhet, transparens och kvalitetskontroll genom hela processen.

![alm_overview.png](attachment:804dcfae-ed36-4b03-97fc-ebf91bb9f24d:alm_overview.png)

### Fördelar:

- **Ökad samverkan:** Gemensamma verktyg för utvecklare, testare och projektledare.
- **Spårbarhet:** Krav, kod, tester och buggar kopplas samman.
- **Effektivare arbetsflöden:** Automatisering och tydliga processer.
- **Riskreducering:** Fel upptäcks tidigare i cykeln.
- **Kontinuerlig förbättring:** Feedback från användare och retrospektiv analys driver förbättringar.

> 💡 Diskussionsfråga: Hur påverkas ett utvecklingsteam när ALM saknas eller hanteras bristfälligt?
> 

---

## 4. Exempel: ALM som Tidslinje – "PayFlow" Fintech-App

Här följer ett exempel på hur ALM kan tillämpas i praktiken, visualiserat som en tidslinje för ett fiktivt fintech-bolag som utvecklar appen "PayFlow".

### 🗂️ ALM-Tidslinje för "PayFlow"

<!-- [Showcase](https://h9gng3.csb.app/) -->

<CollapsibleCard title="ALM-Tidslinje för 'PayFlow'" preview>
  <Timeline />
</CollapsibleCard>

| **Fas** | **Veckor** | **Aktiviteter** | **Leveranser** |
| --- | --- | --- | --- |
| **1. Idé & Planering** | 1–2 | - Identifiera marknadsbehov- Dokumentera krav i Jira- Sätta mål för MVP | - Produktvision- Funktionslista |
| **2. Design & Arkitektur** | 3–4 | - Skapa wireframes i Figma- Definiera systemarkitektur- Välja teknikstack | - Designprototyper- Systemarkitektur |
| **3. Utveckling** | 5–10 | - Utveckla i sprintar- Versionshantering med GitHub- Kodgranskningar | - Färdigställd kod- Automatiserade tester |
| **4. Testning & QA** | 7–12 | - Funktionella och icke-funktionella tester- CI/CD-pipeline med Jenkins- Bugghantering | - Testprotokoll- Godkännande för produktionssättning |
| **5. Distribution & Release** | 13 | - Distribuera till App Store och Google Play- Canary release till 5 % av användarna- Aktivera övervakning med Datadog | - Version 1.0 lanserad- Insamlad användarfeedback |
| **6. Underhåll & Support** | 14+ | - Daglig bugghantering via ServiceNow- Månatliga uppdateringar- Kontinuerliga prestandaförbättringar | - Versionshistorik- Release notes- SLA-uppfyllelse |
| **7. Avveckling** | Efter 5 år | - Ersätta med ny AI-baserad app- Migrera användardata- Gradvis nedstängning | - Nedstängningsplan- Dokumenterad migrering- Kundkommunikation |

---

## 5. Sammanfattning

ALM är ett ramverk för att strukturera, styra och optimera hela livscykeln för en mjukvaruprodukt. Genom att integrera verktyg, processer och människor skapas förutsättningar för kvalitet, skalbarhet och kontinuerlig förbättring. Tidslinjen för "PayFlow" visar hur detta kan omsättas i praktiken, vilket ger team ett konkret exempel på hur man planerar och genomför ett projekt med stöd av ALM.

Vill du fördjupa dig ytterligare kan du undersöka hur ALM relaterar till DevOps – två närliggande men distinkta koncept inom modern utveckling.

---

## 6. 📘 **Gruppuppgift: Planera, strukturera och prioritera ett mjukvaruprojekt med ALM och MVP**

### 🎯 **Syfte:**

Att utveckla förståelse för hur Application Lifecycle Management (ALM) fungerar i praktiken, och att kunna tillämpa planering, prioritering och samarbete i rollen som fullstackutvecklare. Uppgiften syftar också till att träna på att skapa och motivera en MVP (Minimum Viable Product) med hjälp av MoSCoW-metoden.

---

### 🧩 **Scenario:**

Ni arbetar som ett utvecklingsteam bestående av blivande **fullstackutvecklare** och har fått i uppdrag att ta fram en ny webb- eller mobilapplikation. Projektidén kan väljas fritt i samråd med lärare – exempelvis en app för lokaltrafik, bokrecensioner, schemaplanering, matleverans eller evenemangsplanering välj ett nedan eller kom på ett eget.

[Bolags beskrivningar](https://www.notion.so/Bolags-beskrivningar-1ed17cd17715802fb3efca1b95bf28d9?pvs=21)

---

### ✅ **Uppgiftens moment:**

#### 1. 📊 **ALM-planering och analys**

- Kartlägg och diskutera hur projektet kan organiseras enligt **ALM:s sex faser**:
    1. Planering & kravinsamling
    2. Design & arkitektur
    3. Utveckling
    4. Testning & QA
    5. Distribution
    6. Underhåll

För varje fas:

- Beskriv vad som sker, och vilken roll ni som **fullstackutvecklare** har om någon
- Nämn verktyg ni skulle använda (t.ex. GitHub, Postman, Figma, Jenkins)
- Identifiera möjliga utmaningar och hur ni kan hantera dem

#### 2. 📦 **Skapa en MVP – Minimum Viable Product**

Efter **fyra utvecklingsveckor** ska teamet leverera en MVP. Den ska innehålla tillräckligt med funktionalitet för att kunna testas och ge värde till användare, men utan att omfatta hela produkten.

Använd **MoSCoW-metoden** för att prioritera era funktioner:

![image.png](attachment:4e0ca85e-fe0e-4a63-a495-7844cd756c3f:image.png)

> MoSCoW-metoden:
> 
> 
> En metod för att prioritera funktioner i fyra kategorier:
> 
> - **Must have** – Måste finnas för att appen ska fungera över huvud taget
> - **Should have** – Viktigt men inte absolut nödvändigt för MVP
> - **Could have** – Bra om det hinns med
> - **Won’t have (this time)** – Funktioner som utesluts i denna version

**Instruktioner:**

- Lista 10–12 funktioner för er applikation
- Placera varje funktion i rätt MoSCoW-kategori
- Identifiera minst 3–4 funktioner som kommer att ingå i er MVP
- Motivera varför ni valt att prioritera som ni gjort

---

#### 🧠 **Diskussions- och reflektionsfrågor (i grupp):**

- Vad krävs för att leverera en MVP med hög kvalitet?
- Hur påverkar en tydlig ALM-struktur er arbetsroll och samarbetet?
- Vilka risker finns om vissa faser i ALM förbises eller påskyndas?
- Hur bidrar prioritetsmetoder som MoSCoW till att hantera tid och resurser?

---