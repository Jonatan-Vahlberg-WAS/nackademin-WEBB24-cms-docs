# Manus: TypeScript – Funktioner och Any-typen

## Introduktion

Hej och välkommen till dagens lektion om funktioner i TypeScript! Vi kommer gå igenom hur man skriver funktioner, hur man använder typer för argument och returvärden, och när (eller om!) man ska använda `any`-typen.

---

## Vad är en funktion?

En funktion är en kodbit som tar emot data (argument), gör något med den och returnerar ett resultat. I TypeScript kan vi ange vilka typer argumenten och returvärdet ska ha.

**Diskussionsfråga:**

- Varför är det bra att ange typ på argument och returvärde i en funktion?
- Kan du komma på ett exempel där fel typ på ett argument kan skapa problem?

---

## Enkel funktion med typer

```ts
function generateIntroduction(name: string, age: number): string {
  return `Hello my name is ${name} and I am ${age} years old.`;
}
```

Här ser vi att `name` måste vara en sträng, `age` ett nummer, och funktionen returnerar en sträng.

**Miniquiz:**

1. Vad händer om du försöker skicka in ett boolean-värde som `age`?
2. Vad händer om du glömmer return-satsen?

**Prova själv:**

- Skriv en egen funktion som tar två tal och returnerar deras summa. Ange typer på argument och returvärde.

---

## Funktion utan return

```ts
function multiply(a: number, b: number): number {
  console.log(a * b);
  // ERROR: Funktionen måste returnera ett värde
}
```

TypeScript hjälper oss att komma ihåg att om vi säger att en funktion ska returnera ett värde, så måste den faktiskt göra det!

**Reflektera och testa själv:**

- Skriv en funktion som ska returnera en sträng, men glöm return-satsen. Vad säger TypeScript? Testa att lägga till return-satsen och se vad som händer.

---

## Funktion med olika returtyper

```ts
function calculateArea(
  shape: "CIRCLE" | "SQUARE",
  dimension: number
): number | string {
  switch (shape) {
    case "CIRCLE":
      if (dimension <= 0) return "Ogiltig dimension";
      return Math.PI * dimension * dimension;
    case "SQUARE":
      if (dimension <= 0) return "Ogiltig dimension";
      return dimension * dimension;
    default:
      return "Ogiltig form";
  }
}
```

Här kan funktionen returnera antingen ett nummer eller en sträng, beroende på indata.

**Miniquiz:**

1. Vad händer om du skickar in ett negativt tal?
2. Vad händer om du skickar in "TRIANGLE" som shape?

**Prova själv:**

- Lägg till en ny form, t.ex. "RECTANGLE", och implementera area-beräkning för den.
_Tips: definera ett ny optional dimension för rektangeln. typ `dimension2: number`_

---

## Any-typen

Ibland vet vi inte vilken typ data har. Då kan vi använda `any`:

```ts
function saveUser(user: any) {
  // ...
}
```

Men! `any` bör användas sparsamt. Det tar bort TypeScripts typkontroll och kan leda till buggar. Använd det bara när du verkligen inte vet vilken typ det ska vara.

Exempel från API-anrop:

```ts
const requestUserDataFromApi = async (id: string) => {
  return {
    data: {
      id,
    },
  };
};

requestUserDataFromApi(id)
  .then((response) => {
    const userData: any = response.data;
    saveUser(userData);
  })
  .catch((error) => {
    /* ... */
  });
```

**Diskussionsfråga:**

- När kan det vara motiverat att använda `any`?
- Vad kan nackdelen vara om man använder `any` överallt?

**Prova själv:**

- Skriv en funktion som tar emot ett argument av typen `any` och loggar det till konsolen. Testa att skicka in olika typer av data.
- Ändra sedan funktionen så att den tar emot en mer specifik typ. Vad händer om du försöker skicka in fel typ?

---

## Sammanfattning

- Sätt alltid typer på funktioners argument och returvärden
- TypeScript hjälper dig att undvika misstag
- Använd `any` bara när det verkligen behövs

**Avslutande fråga:**

- Vad tycker du är svårast med funktioner och typning i TypeScript?

Tack för att du lyssnade! Nästa gång tittar vi på mer avancerade typer och interface.
