# Manus: TypeScript – Primära datatyper och Typning

## Introduktion

Hej och välkommen till dagens lektion om TypeScript! Idag ska vi prata om vad typning är, varför det är viktigt och hur det skiljer sig från JavaScript. Vi kommer också titta på primära datatyper, implicit och explicit typing, och göra några övningar tillsammans.

---

## Vad är typning?

Typning, eller "typing", handlar om att bestämma vilken sorts data våra variabler och funktioner ska hantera. Det hjälper oss att undvika buggar och gör koden tydligare för både oss själva och andra som läser den.

**Diskussionsfråga:**

- Varför tror du att det är viktigt att veta vilken typ av data en variabel ska ha?
- Kan du komma på ett exempel där fel typ på en variabel kan skapa problem?

---

## Primära datatyper i TypeScript

TypeScript har flera grundläggande datatyper:

- **Number** – för siffror, både heltal och decimaltal.
- **String** – för text, alltså allt inom citattecken.
- **Boolean** – för sant/falskt-värden, alltså `true` eller `false`.
- **Undefined** – när en variabel är deklarerad men inte har fått något värde.
- **Null** – när vi medvetet vill säga att något saknas.
- **Symbol** – används för unika identifierare (mer avancerat, men bra att känna till).

_Tips: Läs mer om dessa på TypeScripts officiella [dokumentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)!_

**Miniquiz:**

1. Vilken typ har värdet `false`?
2. Vad är skillnaden på `null` och `undefined`?
3. Är "123" en number eller en string?

---

## Implicit Typing

I JavaScript kan vi byta typ på en variabel hur vi vill. Det kallas implicit typning. Exempel:

```js
let teacherId = "1412"; // Börjar som en sträng
teacherId = teacherId.split(""); // Blir en array
teacherId = parseInt(teacherId.join("")); // Blir ett nummer
```

I TypeScript är det striktare. Vi får varningar om vi försöker byta typ:

```ts
let teacherId = "1412"; // String
theacherId = teacherId.split(""); // ERROR: Kan inte ändra till string[]
teacherId = parseInt(teacherId.join("")); // ERROR: Kan inte ändra till number
```

Detta hjälper oss att undvika misstag!

**Prova själv:**

- Skriv en variabel i JavaScript och byt typ på den. Vad händer?
- Gör samma sak i TypeScript. Vad får du för felmeddelande?

---

## Explicit Typing

Vi kan också själva bestämma vilken typ en variabel ska ha:

```ts
const fullName: string = "Jonatan Vahlberg";
const courses: string[] = ["Typescript", "HTML/CSS"];
const courseIds: number[] = [986, 993];
const hourOfTheDay = new Date().getHours(); // TypeScript förstår att detta är ett number
const isHungry: boolean = hourOfTheDay > 11 && hourOfTheDay < 13;
```

Det gör koden tydligare och säkrare.

**Reflektera och testa själv:**

- Skriv tre variabler: en string, en number och en boolean. Försök sedan att byta typ på någon av dem och se vad TypeScript säger. Reflektera över varför du får det felmeddelande du får.

---

## Övning: Behövs explicit typing?

Titta på exemplen ovan. Vilka behöver egentligen explicit typing? Fundera och diskutera!

**Diskussionsfråga:**

- När är det bäst att låta TypeScript gissa typen, och när ska vi vara tydliga själva?

---

## Testa dig själv: Vad händer här?

```html
<input id="age-input" type="number" />
```

```ts
const userIsEighteen = () => {
  const numberInput: HTMLInputElement = document.getElementById("age-input") as HTMLInputElement
  if (!numberInput) return false;
  const age = numberInput.value;
  return age === 18;
};
```

Vad blir resultatet om användaren skriver in 18? Varför? Diskutera!

**Miniquiz:**

1. Vilken typ har `numberInput.value`?
2. Hur kan vi förbättra funktionen så att den fungerar som tänkt?

**Prova själv:**

- Ändra funktionen så att den returnerar `true` när användaren skriver in siffran 18.

---

## Sammanfattning

- Typning hjälper oss att skriva säkrare kod
- TypeScript har både implicit och explicit typing
- Fundera alltid på vilken typ dina variabler ska ha

**Avslutande fråga:**

- Vad tar du med dig från dagens lektion?

Tack för att du lyssnade! Nästa gång tittar vi på funktioner och mer avancerade typer.
