---
sidebar_position: 5
title: Uppgifter
---

import CollapsibleCard from "@site/src/components/_library/CollapsibleCard/TWCollapsibleCard";


<CollapsibleCard title="Uppgift 1 - Props">

Utifrån nedan kod skriv **`UserInfo`** komponenten 

```tsx
import React from 'react';
import UserInfo from './UserInfo';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <UserInfo 
				name="John Doe" 
				age={25} 
				email="johndoe@example.com" 
				greeting="Hello">
	        I can only be a string
      </UserInfo>
    </div>
  );
}

export default App;
```
</CollapsibleCard>

<CollapsibleCard title="Uppgift 2 -  Typescript-React TodoList">
1. Skapa ett **Task**gränssnitt för att definiera formen på ett uppgiftsobjekt med följande egenskaper:
    - **id**: number
    - **title**: string
    - **completed**: boolean
2. Skapa ett **`TodoListProps`**gränssnitt för att definiera props för TodoList-komponenten:
    - **`title`**: string (obligatorisk)
    - **`initialTasks`**: Task[] (valfritt)
3. Skapa en funktionell komponent som heter **`TodoList`** och tar emot **`TodoListProps`** som props. Komponenten ska rendera en rubrik, en lista över uppgifter och ett formulär för att lägga till nya uppgifter.
4. Använd **`useState`**hooket för att hantera tillståndet för uppgifterna. Det initiala tillståndet ska sättas till **`initialTasks`**proppen om den finns, annars en tom array.
5. Använd **`map`**funktionen för att rendera varje uppgift från tillståndet som en listrad. Visa uppgiftens rubrik och en kryssruta för att markera uppgiften som slutförd.
6. Implementera en anpassad hook som heter **`useTaskManager`** och hanterar logiken för att lägga till nya uppgifter. Hooken ska returnera en funktion **`addTask`** som tar emot en **`title`**parameter och lägger till en ny uppgift med ett unikt ID till tillståndet.
7. Använd **`useTaskManager`**hooken inom **`TodoList`**komponenten för att hantera tillägg av nya uppgifter när formuläret skickas.

## Extra

1. Implementera funktionalitet för att markera uppgifter som slutförda genom att klicka på kryssrutan. Uppdatera tillståndet för uppgifterna och visa en visuell indikation på vilka uppgifter som är slutförda. detta görs som en separat funktion i **useTaskManager**hooken så kallad **setTaskCompleted** som tar emot ett unikt id och tar bort task ur listan.
2. Skapa en anpassad hook **useLocalStorage** som använder **localStorage** för att lagra tillståndet för uppgifterna. Så att även om sidan laddas om eller stängs av, kommer uppgifterna att återställas från **localStorage** vid återhämtning.
**useLocalStorage** 
    1. Hooken tar in en LS key tex **@LS_TODO_LIST** men endast godkända keys och inte bara en string. Den ska också vara generisk och ges typen `<Task[]>`
    2.  den returnerar
        1. **getStoredValue** tar inget och retunerar `<T>`
        2. **setStoredValue**  tar `<T>` och retunerar inget
    3. Updatera också **addTask** med att den tar en **onAdded** för att spara listan
</CollapsibleCard>

<CollapsibleCard title="Slutuppgift - Väderapp">

https://openweathermap.org/

Använd open weather data för att ta fram en sida där vi kan hämta typad väderdata för en spesifik stad

https://openweathermap.org/current#name

1. Spara API som .env för säkerhets skull
2. Typa svaret från APIn
3. Rendera den typade datan
4. Rendera ett formulär för att ändra datan (client eller serverside)
</CollapsibleCard>