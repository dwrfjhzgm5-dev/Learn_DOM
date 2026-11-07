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

**Wichtige Parameter und ihre Bedeutung:**

| Parameter      | Bedeutung                                       |
| -------------- | ----------------------------------------------- |
| `.value`       | Aktueller Eingabewert des Nutzers               |
| `.type`        | Art des Inputs (`text`, `checkbox`, `radio`, …) |
| `.checked`     | `true/false` – ob Checkbox/Radio ausgewählt ist |
| `.disabled`    | `true/false` – ob das Feld deaktiviert ist      |
| `.placeholder` | Hinweistext im leeren Feld                      |
| `.name`        | Name des Feldes (wichtig für Formulare)         |
| `.id`          | ID des Elements                                 |

**Beispiel:**

```js
const input = document.getElementById('name');
console.log(input.value); // Eingabe auslesen
input.disabled = true; // Feld deaktivieren
input.placeholder = 'Name...'; // Platzhalter setzen
```

```

```
