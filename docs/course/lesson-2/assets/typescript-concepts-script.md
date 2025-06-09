# Manus: TypeScript – Typer, Tuples, Enums och Interface vs Type

## Introduktion

Hej och välkommen till lektionen om TypeScript-koncept! I dag ska vi gå igenom typer, typalias, tuples, enums och skillnaden mellan interface och type. Lektionen är anpassad för självstudier – du kommer att få reflektera, testa själv och svara på frågor längs vägen.

---

## Typer och Typalias

En typ i TypeScript är som en mall för hur data ska se ut. Du kan skapa egna typer för objekt, funktioner eller enklare värden.

**Exempel:**

```ts
type Person = {
  firstName: string;
  lastName: string;
  age: number;
  getFullName: () => string;
};
```

**Reflektera:**

- Varför kan det vara bra att skapa egna typer istället för att bara använda t.ex. `object` eller `any`?

**Miniquiz:**

1. Vad är skillnaden på ett type-alias och ett interface?
2. Vad händer om du försöker skapa en typ med samma namn två gånger?

**Prova själv:**

- Skapa ett type-alias för en produkt med namn, pris och kategori.

---

## Typalias för enklare typer

Du kan skapa alias även för enklare typer:

```ts
type Id = number | string;
type Status = "active" | "inactive" | "pending";
```

**Testa själv:**

- Skapa en funktion som tar ett `Id` och returnerar en `Status`.

---

## Optional och Nested Types

Du kan göra egenskaper valfria med `?` och nästla typer:

```ts
type Person = {
  firstName: string;
  lastName: string;
  age: number;
  lastKnownAddress?: string;
  job?: Job;
};
```

**Reflektera:**

- När är det bra att använda optional properties?

**Prova själv:**

- Skapa en typ för ett djur med valfri egenskap för färg.

---

## Extended Types

Du kan utöka typer med `&`:

```ts
type Employee = Person & { job: Job };
```

**Miniquiz:**

1. Vad händer om två typer du "slår ihop" har samma egenskap fast olika typ?

---

## Tuples

Tuples är arrayer med bestämt antal och typ på elementen.

```ts
const myTuple: [string, number, boolean] = ["Jhon", 18, false];
```

**Prova själv:**

- Skapa en tuple för koordinater (x, y).
- Skriv en funktion som tar två koordinater och räknar ut avståndet mellan dem.

**Reflektera:**

- När är det bättre att använda tuple än ett objekt?

---

## Enums

Enums används för att skapa namngivna konstanter.

```ts
enum Color {
  Red,
  Blue,
  Green,
}
```

**Miniquiz:**

1. Vad är skillnaden på enum och union types?
2. Vad händer om du inte sätter ett värde på enum-medlemmarna?

**Prova själv:**

- Skapa en enum för veckodagar.
- Skriv en funktion som tar en dag och returnerar om det är helg eller vardag.

---

## Interface vs Type

**Reflektera:**

- När är det bäst att använda interface och när är type bättre?

**Miniquiz:**

1. Kan ett interface utökas av flera andra interfaces?
2. Kan ett type-alias vara en union av flera typer?

**Prova själv:**

- Skapa ett interface för en bil och ett type-alias för en union av olika fordonstyper.

---

## Slutuppgift

- Hitta ett öppet API och skriv typer för den data du vill använda.
- Reflektera: Hur hjälpte typer dig att förstå och använda datan säkrare?

Tack för att du studerar TypeScript! Fortsätt testa och reflektera på egen hand.
