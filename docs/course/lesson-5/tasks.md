---
sidebar_position: 3
title: Uppgifter
en_title_slug: tasks
---

## Uppgift 1 -  Multi tree

**Mål med uppgiften:**
Skapa flerspråkigt träd som resulterar i flerspråkig site.

1. Använd befintligt space mot befintligt repo.
2. Skapa kopia av befintlig trädstruktur i content
3. Ändra så att parentfolder heter ex “sv” och “en” i Storyblok
4. Skapa innehåll med annat språk.
5. Publicera alla sidor
6. Testa i din [localhost](http://localhost) eller Visual editor

---

## Uppgift 2 - Deployhook & Webhook

**Mål med uppgiften**
Få till kopplingen mellan storyblok och vercel för att publicera nya ändringar
****

1. Lägg till nytt projekt eller använd befintligt i Vercel dashboard och koppla mot erat cms repo
2. Skapa en deploy hook i via ditt vercel projekt, kopiera urlen.
3. Koppla mot ditt Storyblok space > Webhooks med publish som trigger.
4. Slutligen skall en publikation via storyblok bygga om er vercel site.

---

## Uppgift 4 - Richtext

**Mål med uppgiften**
Försöka kunna göra ändringar i richtext komponent. 

1. Använd befintlig Richtext komponent i repot
2. Skapa ett richtext fält i ny komponent eller befintlig i Storyblok
3. I befintlig Richtext komponent i boilerplate:en

---

## Uppgift 3 - Visual editor miljö

**Mål med uppgiften**
Koppla vercel domain mot Visual editor
****

1. I ditt repo skapa ny branch staging
2. Se till att vara kopplad till ett vercel projekt
3. Pusha din staging branch till github
4. I Projects Settings och domains, skapa nytt staging domain kopplad mot staging  branchen
5. I Projects Settings - stäng av deployment protection
6. Kopiera genererad staging url
7. Lägg in url i Storyblok > Settings Visual Editor (default url)
8. Hoppa in i visual editor så bör det fungera utan localhost!