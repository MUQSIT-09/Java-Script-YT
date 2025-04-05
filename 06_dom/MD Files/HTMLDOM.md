---

# 🌐 JavaScript DOM & Window Object Cheatsheet

## 🌟 Introduction

This markdown document serves as a comprehensive guide to understanding JavaScript's **Window** and **DOM (Document Object Model)** concepts, along with commonly used methods to manipulate the HTML structure.

---

## 🪟 Window Object

### 📌 Description

- The `window` is the **global object** created by the browser.
- It's at the **top of the hierarchy**, and every other object (like `document`, `console`, etc.) comes under it.
- You can access any function like `alert`, `prompt`, etc., through `window.alert()`, `window.prompt()` — although the `window.` prefix is usually optional.

### 💡 Example

```js
window.alert("Hello World!");
```

🖥️ Output: A browser alert saying "Hello World!"

---

## 📄 DOM (Document Object Model)

### 📌 Description

- The **DOM** represents the structure of an HTML document as a **tree of objects**.
- JavaScript can manipulate these nodes to update content, styles, and structure.

### 🧱 HTML Example Used

```html
<body>
  <p id="firstpara" class="Textmatter">First Para</p>
  <p id="secoundtpara" class="Textmatter">Second Para</p>
  <p id="Thirdpara" class="Textmatter">Third Para</p>
  <h1 id="firstheading" class="Textmatter">First Heading</h1>
</body>
```

---

## 🔍 DOM Element Selectors

### 1. `getElementById()`

```js
document.getElementById('firstpara');
```

✅ Output: `<p id="firstpara" class="Textmatter">First Para</p>`

### 2. `getElementsByClassName()`

```js
document.getElementsByClassName('Textmatter');
```

✅ Output: HTMLCollection of 4 elements with class `Textmatter`

### 3. `getElementsByTagName()`

```js
document.getElementsByTagName('p');
```

✅ Output: HTMLCollection of all `<p>` elements

### 4. `querySelector()`

```js
document.querySelector('p');
document.querySelector('.Textmatter');
```

✅ Output: First matching element (e.g., `<p id="firstpara">`)

### 5. `querySelectorAll()`

```js
document.querySelectorAll('p');
```

✅ Output: NodeList of all `<p>` elements

### 💡 Bonus: `$0`

- Inspect an element in DevTools, then access it in console using `$0`.

---

## ✏️ Modifying Content

### HTML Structure Example

```html
<body>
  <div id="fdiv">
    <p>This Is My first <span>Text</span></p>
    <p>This My Second</p>
  </div>
</body>
```

### 1. `innerHTML`

```js
let elem = document.getElementById("fdiv");
console.log(elem.innerHTML);
```

🖥️ Output:

```html
<p>This Is My first <span>Text</span></p>
<p>This My Second</p>
```

### 2. `outerHTML`

```js
console.log(elem.outerHTML);
```

🖥️ Output:

```html
<div id="fdiv">
  <p>This Is My first <span>Text</span></p>
  <p>This My Second</p>
</div>
```

### 3. `textContent` vs `innerText`

```js
console.log(elem.textContent);
console.log(elem.innerText);
```

🖥️ Output Example:

```
textContent: 'This Is My first Text This My Second'
innerText: 'This Is My first Text\nThis My Second'
```

---

## ➕ Adding Elements

### 1. `createElement()`

```js
let heading = document.createElement('h1');
heading.textContent = "Hello World!";
```

### 2. `appendChild()`

```js
document.body.appendChild(heading);
```

🖥️ Output: Adds `<h1>Hello World!</h1>` at the end of the `<body>`

### 3. `insertAdjacentElement()`

```js
let target = document.getElementById('mydiv');
target.insertAdjacentElement('beforebegin', heading);
```

🖥️ Output: Inserts `<h1>Hello World!</h1>` just before the `#mydiv` element

---

## ❌ Removing Elements

### 1. `removeChild()`

```js
let parent = document.querySelector('#mydiv');
let child = document.querySelector('#para');
parent.removeChild(child);
```

### 2. ❌ Incorrect Way

```js
let parent = child.parentElement; // ❌ Error: child is not defined yet!
let child = document.querySelector('#para');
```

### 3. ✅ Better Options

```js
document.querySelector('#para').remove();
document.querySelector('#mydiv').innerHTML = '';
document.querySelector('#mydiv').replaceChild(document.createTextNode(''), child);
```

### ✅ Comparison Table

| Method           | Clean | Needs Parent | Modern Support |
| ---------------- | ----- | ------------ | -------------- |
| `remove()`       | ✅     | ❌            | ✅              |
| `removeChild()`  | ✅     | ✅            | ✅              |
| `innerHTML = ''` | ❌     | ✅            | ✅              |
| `replaceChild()` | 🤔    | ✅            | ✅              |

---

## 🏁 Summary

- Use `querySelectorAll` for multiple elements.
- Prefer `textContent` for performance.
- Use `element.remove()` for modern and clean element deletion.
- `insertAdjacentElement` gives you precise placement control.

---

## 🔗 Resources

- [MDN Web Docs - DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [JavaScript Info](https://javascript.info/dom-nodes)

---

