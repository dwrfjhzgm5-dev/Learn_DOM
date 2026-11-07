// Aufgabe 1: Die document Variable

// Informationen über die Seite ausgeben
console.log(document.title);
console.log(document.URL);

// Ein Element finden und den Text ändern
const myDiv = document.getElementById('myDiv');
myDiv.textContent = 'Ich übe gerade das DOM!';

// Aufgabe 2: Zugriff und Änderung von myList

// Die Liste finden
const myList = document.getElementById('myList');

// Den Text vom ersten Listenelement ändern
myList.children[0].textContent = 'Mein erstes Item';

// Ein neues Listenelement erstellen
const newItem = document.createElement('li');
newItem.textContent = 'Ich wurde mit JavaScript erstellt';

// Das neue Element zur Liste hinzufügen
myList.appendChild(newItem);

// Aufgabe 3: Das input DOM-Element

// Das Eingabefeld finden
const nameInput = document.getElementById('name');

// Einen Platzhalter eintragen
nameInput.placeholder = 'Bitte Namen eingeben';

// Den Wert des Eingabefeldes ausgeben
console.log(nameInput.value);

// Die Checkbox finden und auslesen
const agreeCheckbox = document.getElementById('agree');
console.log(agreeCheckbox.checked);
