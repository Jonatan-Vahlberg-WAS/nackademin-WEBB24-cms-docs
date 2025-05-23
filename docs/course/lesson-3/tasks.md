---
sidebar_position: 5
title: Uppgifter
---

## Gruppuppgift

Forka https://github.com/Jonatan-Vahlberg-WAS/core-academy Se till att du är på senaste versionen av main. Skapa en ny branch `feature/mail-model`

### Lägg till Mail modell

```powershell
MAIL
	subject
	status - pending, canceled
	content
	order - id
	sentAt - Date now
	user - id
```

När en order skapas så ska ett `Pending Mail` också skapas. När en order avbryts så skapas ett `Cancelled Mail`**.**

Detta ska därför ske i en hook för `Order` i och med att detta ska ske när en order skapas så vill vi ha ett order `modell test` som testar att detta faktiskt sker. Men vi behöver också ett `integration test` som testar att detta sker när vi skickar en cancellation.

Sen vill vi se att om vi skapar en PR så körs våra tester automatiskt och samma när vi drar in branchen.

## Hem uppgift

Skapa mailets innehåll automatiskt utifrån en egen hook i `Mail` modellen där beroende på status så skrivs template data in

```json
{
"subject": "Hej {{[user.name](http://user.name/)}}, din beställning väntar på bekräftelse",
"status": "pending",
"content": "Hej {{[user.name](http://user.name/)}}, vi har tagit emot din beställning med ordernummer {{[order.id](http://order.id/)}}. Din beställning är för närvarande under behandling och du får en uppdatering när status ändras.",
"order": "#ID"
"sentAt": "{{now}}",
"user": "#ID"
}
```

Testen som vi då behöver skriva är modell test för `Mail` modellen vanliga och dem som har att göra med hooken. Ett sånt test kan tex vara att man tittar att usern som skapade orderns name finns i subject och content samt att subject verkar rimligt för den statusen.