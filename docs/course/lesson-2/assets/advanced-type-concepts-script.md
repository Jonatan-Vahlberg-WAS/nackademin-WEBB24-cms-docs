# Manus: TypeScript – Avancerade typkoncept

## Introduktion

Välkommen till lektionen om avancerade typkoncept i TypeScript! Här lär du dig om union types, intersection types och mapped types. Lektionen är anpassad för självstudier – du får reflektera, testa själv och svara på frågor.

---

## Union Types

Med union types kan en variabel ha flera möjliga typer.

**Exempel:**

```ts
type Pet =
  | { kind: "dog"; name: string; breed: string }
  | { kind: "cat"; name: string; age: number };
```

**Reflektera:**

- När kan det vara användbart att använda union types?

**Miniquiz:**

1. Vad händer om du försöker använda en egenskap som bara finns på en av unionens typer?

**Prova själv:**

- Skapa en union type för olika fordon (bil, cykel, båt) med olika egenskaper.

---

## Intersection Types

Intersection types kombinerar flera typer till en.

**Exempel:**

```ts
type Nameable = { name: string };
type Ageable = { age: number };
type Person = Nameable & Ageable;
```

**Reflektera:**

- När är det bättre att använda intersection types än att skapa en ny typ från grunden?

**Prova själv:**

- Skapa två typer och kombinera dem med &. Testa att skapa ett objekt som uppfyller båda.

---

## Mapped Types

Mapped types låter dig skapa nya typer baserat på en existerande typ.

**Exempel:**

```ts
type ReadonlyPerson = Readonly<Person>;
```

**Miniquiz:**

1. Vad gör `Readonly<T>`?
2. Kan du skapa en mapped type som gör alla egenskaper valfria?

**Prova själv:**

- Skapa en typ och använd `Partial<T>` och `Required<T>` på den. Vad händer?

---

## Sammanfattning

- Union types = en av flera möjliga typer
- Intersection types = måste uppfylla alla ingående typer
- Mapped types = skapa nya typer från befintliga

**Avslutande reflektion:**

- Hur kan dessa avancerade typkoncept hjälpa dig att skriva säkrare och mer flexibel kod?

Tack för att du studerar TypeScript! Fortsätt experimentera och reflektera på egen hand.
