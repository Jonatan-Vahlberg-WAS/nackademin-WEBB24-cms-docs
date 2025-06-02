---
sidebar_position: 2
title: Generics, Guards och Assertions
en_title_slug: generics-guards-assertions
---


# Generics

https://www.typescriptlang.org/docs/handbook/2/generics.html

Generics är en funktion som tillåter oss att skapa återanvändbar kod med en flexibel datatyp. Med hjälp av Generics kan vi skapa funktioner, klasser och types som kan hantera olika datatyper utan att behöva skapa en separat funktion, klass eller type för varje datatyp.

## Generic functions

Med det sagt så tillåter generics att vi definerar abstrakt kod som först vid implementation talar om vad för värde som tillåts.

### Grundläggande Syntax

Generics introduceras i funktioner, klasser eller gränssnitt genom att använda vinkelparenteser (`<>`). Här är ett grundläggande exempel på en generisk funktion:

Vi börjar med att skapa en generisk funktion som hämtar data från en given URL och returnerar data av en specifik typ.

```tsx
async function fetchDetailData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    const data: T = await response.json();
    return data;
}
```

Låt oss anta att vi har tre olika typer av data som vi vill hämta: `Post`, `AlbumPhoto`, och `comments`. Vi definierar dessa typer som gränssnitt

```tsx
type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
}

type Comment = {
	postId: number
	id: number;
	name: string;
	email: string;
	body: string;
}

type AlbumPhoto = {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}
```

Nu kan vi använda vår generiska funktion för att hämta data av dessa typer:

```tsx
async function getPostData() {
    const post: Post = await fetchData<Post>('https://jsonplaceholder.typicode.com/posts/1');
    console.log(post);
}

async function getCommentData() {
    const comment: Comment = await fetchData<Comment>('https://jsonplaceholder.typicode.com/comments/1');
    console.log(comment);
}

async function getAlbumPhotoData() {
    const photo: AlbumPhoto = await fetchData<AlbumPhoto>('https://jsonplaceholder.typicode.com/photos/1');
    console.log(photo);
}

getPostData();
getCommentData();
getAlbumPhotoData();

```

En vanlig användning av generics är useState i react som bygger på att den datan som skickas in sätts till dess generic type. Vi definerar därför också useState på sådant sätt

```tsx
const [user, setUser] = useState<User>()
// user can be undefined or User

const [user, setUser] = useState<User>(null)
//user can be User or null
```

Om vi vill göra något med datan så som array manipulation så skulle vi skriva det som sådan då enforcar vi att products måste vara en lista

```tsx
function sortProducts<T>(products: T[]): T[] {
	products.sort(...)
return products
}

```

**Övning: Skriv en ny vy** `fetchListData` som fungerar som detail varianten med skillnaden att vi ska hämta hem en lista av data

## Generic classes

För att ytterligare demonstrera användningen av generics i en mer verklig situation, låt oss skapa en generisk klass för en enkel cache.

```tsx
class DataCache<T> {
    private cache: { [key: string]: T } = {};

    setItem(key: string, value: T): void {
        this.cache[key] = value;
    }

    getItem(key: string): T | undefined {
        return this.cache[key];
    }
}
```

I den här klassen definierar vi en cache som en objekt med nycklar av typen `string` och värden av den generiska typen `T`. Metoderna `setItem` och `getItem` låter oss lägga till och hämta objekt från cachen.

Nu när vi har vår generiska cache-klass, låt oss använda den för att lagra och hämta olika typer av data: `Post`, `Comment`, och `AlbumPhoto`.

```tsx
const postCache = new DataCache<Post>();

postCache.setItem('post1', {
    userId: 1,
    id: 1,
    title: 'My First Post',
    body: 'This is the content of my first post'
});

console.log(postCache.getItem('post1'));
// Output: { userId: 1, id: 1, title: 'My First Post', body: 'This is the content of my first post' }

```

**Övning: Implementera** `DataCache` i  ****`fetchListData` och `fetchDetailData` 

För detta ska vi tänka oss att datan i vårt API ändras inte jätte ofta och vi vill hämta det cachade värdet helst.

1. När vi gör ett anrop där vi får ett posetivt svar antingen en `Detail` eller `Lista` så vill vi spara urlen som ett cache ex [`https://jsonplaceholder.typicode.com/posts`](https://jsonplaceholder.typicode.com/posts) 
2. När anropet görs nästa gång så vill vi ta det från vår cache istället så då skickar vi en snabb förfrågan till cache om om vi får tillbaka något posetivt så retunerar vi det snarare än vanliga anropet.

*** Extra:** Om mer än 10 sekunder har gått sen anropet senast skickades till servern så ska vi inte hämta det från cache utan från servern.

```tsx
const MAX_AGE = 10 * 1000; // 10 seconds

class DataCache<T> {
    private cache: { [key: string]: T } = {};
    private cachedAt: { [key: string]: number } = {};

    setItem... //TODO: set cachedAt
    getItem...

    cacheExpired(key: string): boolean {
        return false //TODO: implement cache difference check
    }
}
getPostData() // Not cached
getPostData() // cached
setTimeout(() => {
	getPostData() //Cached
}, MAX_AGE)
```

### Generics med flera typer

Vi skapar en generisk klass `ApiService` som kan hantera CRUD-operationer (Create, Read, Update, Delete) för olika resurser. Denna klass använder två generiska typparametrar: `T` för resursen och `ID` för identifieraren.

```tsx
class ApiService<T, ID> {
    constructor(private baseUrl: string) {}

    async getAll(): Promise<T[]> {
        const response = await fetch(`${this.baseUrl}`);
        return response.json();
    }

    async getById(id: ID): Promise<T> {
        const response = await fetch(`${this.baseUrl}/${id}`);
        return response.json();
    }

    async create(item: T): Promise<T> {
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });
        return response.json();
    }

    async update(id: ID, item: T): Promise<T> {
        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });
        return response.json();
    }

    async delete(id: ID): Promise<void> {
        await fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE',
        });
    }
}

```

I båda fallen ovan är får generics tekniskt sätt korekta men vi kan se att dem är oanpassad för andra typer av värde

Nu kan vi skapa instanser av `ApiService` för att hantera olika typer av data.

```tsx
const postService = new ApiService<Post, number>('https://jsonplaceholder.typicode.com/posts');

async function managePosts() {
    // Hämta alla inlägg
    const posts = await postService.getAll();
    console.log('All Posts:', posts);

    // Hämta ett specifikt inlägg
    const post = await postService.getById(1);
    console.log('Post with ID 1:', post);

    // Skapa ett nytt inlägg
    const newPost = await postService.create({
        userId: 1,
        id: 101,
        title: 'New Post',
        body: 'This is a new post.'
    });
    console.log('Created Post:', newPost);

    // Uppdatera ett inlägg
    const updatedPost = await postService.update(1, {
        userId: 1,
        id: 1,
        title: 'Updated Post',
        body: 'This is an updated post.'
    });
    console.log('Updated Post:', updatedPost);

    // Ta bort ett inlägg
    await postService.delete(1);
    console.log('Deleted Post with ID 1');
}

managePosts();

```


# Type assertions

https://basarat.gitbook.io/typescript/type-system/type-assertion

Type assertions låter dig explicit tala om för kompilatorn vilken typ en viss variabel har. Det är viktigt att komma ihåg att detta inte ändrar själva typen av värdet vid körning, utan endast hjälper kompilatorn att bättre förstå din kod.

Type assertions kan göras på två sätt:

1. **Angle-bracket syntax:**
    
    ```tsx
    let someValue: any = "this is a string";
    let strLength: number = (<string>someValue).length;
    
    ```
    
2. **`as`syntax:**
    
    ```tsx
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;
    
    ```
    

Den rekommenderade syntaxen är att använda `as`-syntax eftersom den fungerar bättre med JSX (en syntax som ofta används med React).

Anta att vi hämtar data från ett API som returnerar en JSON-struktur. Vi vet vad vi förväntar oss att få tillbaka, men TypeScript kan inte gissa detta åt oss.

```tsx
type Beer {
  price: string;
  name: string;
  rating: {
    average: number;
    reviews: number;
  };
  image: string;
  id: number;
}

async function fetchData() {
    const response = await fetch('https://api.sampleapis.com/beers/ale/1');
    const data: Beer = await response.json();

    // Vi vet att data är av typen ApiResponse
    const beer = data as Beer;
    console.log(`${beer.name} is a ale with a avarege rating of ${Math.round(beer.rating.average * 10) / 10}
}

```

**Uppgift: Gå in på** https://sampleapis.com/ **och hitta en annan API som ni kan hämta från och göra en Type assert på**

# Type Guard

https://basarat.gitbook.io/typescript/type-system/typeguard

I TypeScript används type guards för att förtydliga och specificera typerna hos variabler. Detta gör det möjligt att utföra exaktare typkontroll och undvika felaktiga typer vid körning. Det finns flera sätt att definiera type guards i TypeScript, inklusive användning av operatorn **`typeof`**, **`instanceof`** och anpassade type guard-funktioner.

### **Type guard med `typeof`operatorn**

En vanlig användning av type guards är att använda **`typeof`**-operatorn för att kontrollera typen av en variabel:

```tsx

function logLength(strOrArray: string | string[]): void {
strOrArray
  if (typeof strOrArray === "string") {
    console.log(strOrArray.length);
  } else {
    console.log(strOrArray.map);
  }
}

logLength("hello"); // skriver ut 5
logLength(["hello", "world"]); // skriver ut 2

```

Eftersom både string och array har en parameter length så kommer ovan exempel att fungera utan type-guards men om vi tar exemplet nedan

```tsx
function doSomething(x: number | string) {
    if (typeof x === 'string') { // Within the block TypeScript knows that `x` must be a string
        console.log(x.subtr(1)); // Error, 'subtr' does not exist on `string`
        console.log(x.substr(1)); // OK
    }
    x.substr(1); // Error: There is no guarantee that `x` is a `string`
}
```

### **Type guard med `instanceof`operatorn**

En annan vanlig type guard är att använda **`instanceof`**-operatorn för att kontrollera om ett objekt är en instans av en specifik klass: Om vi tar vårt produkt exempel ovan

```tsx
//type GenericProduct
//type FoodProduct
//type ElectronicProduct

function printProductDetails(product: GenericProduct): void {
  if (product.category === ProductCategory.Food) {
    if (product instanceof FoodProduct) {
      console.log("Food Type:", product.foodType);
    } else {
      console.log("Invalid product type for FoodProduct");
    }
  } else if (product.category === ProductCategory.Electronics) {
    if (product instanceof ElectronicProduct) {
      console.log("Voltage:", product.voltage);
    } else {
      console.log("Invalid product type for ElectronicProduct");
    }
  } else {
    console.log("Invalid product category");
  }
}
```

Här kommer vi lätt åt dem underliggande variablerna för att vi har indetifierat vad för typ av produkt vi har att göra med.

Det finns fler sätt att använda type guards som vi inte hinner gå igenom nu.

### strictNullChecks

Typescript can identifiera med `== null` eller `!= null` om något är null eller undefined

```tsx
let num?: number | null = undefined

if(num == null) console.log("Is null or undefined")
num = null
if(num != null) console.log("Is NOT null or undefined")

```

# Hemläxa

Läs mer om varför man ska och inte ska använda type assertions.

[Type assertions considered harmful?](https://basarat.gitbook.io/typescript/type-system/type-assertion#assertion-considered-harmful)

På nästa lektion kommer vi gå igenom vad ni har kommit fram till angående detta