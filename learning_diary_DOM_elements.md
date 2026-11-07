````markdown
## Aufgabe 1 – Die `document` Variable

`document` ist ein globales Objekt im Browser und repräsentiert das gesamte HTML-Dokument.
Es ist der Einstiegspunkt zum **DOM (Document Object Model)** – einer Baumstruktur, die HTML als JavaScript-Objekte darstellt.

Mit `document` kann man:

- **Elemente finden** → `document.getElementById()`, `document.querySelector()`
- **Elemente verändern** → Text, CSS, Klassen oder Attribute ändern
- **Elemente erstellen** → `document.createElement()` + `appendChild()`
- **Events reagieren** → `addEventListener()` auf gefundene Elemente
- **Seiten-Infos lesen** → `document.title`, `document.URL`

`document` ist die Brücke zwischen JavaScript und HTML –
alles was auf der Seite sichtbar ist, lässt sich damit lesen, ändern oder neu erstellen.

---

## Aufgabe 2 – Zugriff und Änderung von `myList`

**Zugriff auf die Liste:**

```js
const list = document.getElementById('myList');
// oder:
const list = document.querySelector('#myList');
```
````

**Liste verändern – Beispiele:**

```js
// Einzelnes Element ändern
list.children[0].textContent = 'Neues Item';

// Neues Element hinzufügen
const newItem = document.createElement('li');
newItem.textContent = 'Item 4';
list.appendChild(newItem);

// Element entfernen
list.removeChild(list.children[0]);

// Gesamten Inhalt ersetzen
list.innerHTML = '<li>Nur noch eins</li>';
```

---

## Aufgabe 3 – Das `input` DOM-Element

Das `input`-DOM-Element stellt ein Eingabefeld einer HTML-Seite in JavaScript dar. Dadurch kann JavaScript auf das Eingabefeld zugreifen und seine Eigenschaften auslesen oder verändern.

Mit `.value` kann man den eingegebenen Wert auslesen. Mit `.placeholder` legt man einen Hinweistext fest. Die Eigenschaft `.disabled` bestimmt, ob das Eingabefeld deaktiviert ist. Bei Checkboxen und Radio-Buttons zeigt `.checked`, ob das Element ausgewählt wurde.

Zuerst wird das Eingabefeld über seine ID gefunden:

````js
const input = document.getElementById('name');                                |

**Beispiel:**

```js
const input = document.getElementById('name');
console.log(input.value); // Eingabe auslesen
input.disabled = true; // Feld deaktivieren
input.placeholder = 'Name...'; // Platzhalter setzen
````

```

```
