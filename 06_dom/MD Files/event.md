# 📚 JavaScript Events 

JavaScript Events are the foundation for creating interactive web pages. They help track user interactions like clicks, keypresses, scrolling, and much more. This guide explains key concepts like event targets, event listeners, preventing default actions, and safely accessing DOM elements.



---

## 🔔 What is an Event?

An **event** is like an announcement made by the browser when something happens on the page — a click, keypress, or mouse move.

```js
// Events include:
// - click
// - scroll
// - keydown
// - load
// - submit
```

> 📌 Events can be user-triggered or browser-triggered.

### 🧪 Try it Yourself:

```html
<button onclick="alert('Button Clicked!')">Click Me</button>
```

---

## 🎯 Event Target

The **event target** is the specific HTML element where the event occurred. You use `addEventListener` to attach functions to these events.

### Example 1: Change Paragraph Text

```html
<p id="fpara">Click me!</p>
```

```js
function changetext() {
    let fpara = document.getElementById("fpara");
    fpara.textContent = "Hello Shah";
}

let fpara1 = document.getElementById("fpara");
fpara1.addEventListener('click', changetext);
```

📝 **Output:** Clicking the paragraph changes its text to `Hello Shah`.

### Example 2: Change Background Color on Click

```html
<div id="box" style="width:100px; height:100px; background:red;"></div>
```

```js
document.getElementById("box").addEventListener("click", function() {
    this.style.background = this.style.background === 'red' ? 'blue' : 'red';
});
```

---

## ⚠️ Anonymous Function Caveat

Avoid anonymous functions when using `addEventListener` if you ever need to remove that listener.

```js
let fpara = document.getElementById("fpara");
fpara.addEventListener('click', function changetext() {
    fpara.textContent = "Hello Shah";
});
```

> ⚠️ Problem: Can't use `removeEventListener()` properly because each function reference is different.

---

## ⛔ preventDefault()

Use `preventDefault()` to stop the default behavior of an element, such as preventing a link from navigating.

### Example:

```html
<a id="fanchor" href="https://example.com">Click Here</a>
```

```js
let fanchor = document.getElementById("fanchor");
function avoiddefault(event) {
    event.preventDefault();
    fanchor.textContent = "Welcome To Valhalla";
}

fanchor.addEventListener('click', avoiddefault);
```

📝 **Output:** The anchor text changes to `Welcome To Valhalla` and doesn’t redirect.

---

## 🚫 Avoiding Too Many Listeners

Instead of attaching individual event listeners to each element, use **event delegation**.

### HTML Example:

```html
<div id="wrapper">
  <p>First <span>First Span</span> Para</p>
  <p>Second <span>Second Span</span> Para</p>
  <p>Third <span>Third Span</span> Para</p>
</div>
```

### JavaScript:

```js
function alertpara(event) {
    if (event.target.nodeName === 'SPAN') {
        alert("You have clicked on: " + event.target.textContent);
    }
}

let mydiv = document.getElementById('wrapper');
mydiv.addEventListener('click', alertpara);
```

📝 **Output:** Alert shows only when a `<span>` is clicked.

---

## 🕒 DOMContentLoaded

Ensure your scripts run **after** the HTML is fully loaded using `DOMContentLoaded`.

### Why?

When scripts run before the DOM is ready, `getElementById()` or other selectors may return `null`.

### Example:

```js
document.addEventListener('DOMContentLoaded', function () {
    let mydiv = document.getElementById('wrapper');
    mydiv.addEventListener('click', function(event) {
        if (event.target.nodeName === 'SPAN') {
            alert("You clicked on: " + event.target.textContent);
        }
    });
});
```

📝 **Tip:** Wrap your code inside `DOMContentLoaded` if your `<script>` is placed in the `<head>` or before the elements in `<body>`.

---

## 🎨 Bonus Examples

### Example: Mouse Enter & Leave

```html
<div id="hoverBox" style="width: 100px; height: 100px; background: yellow;"></div>
```

```js
document.getElementById('hoverBox').addEventListener('mouseenter', () => {
  alert('Mouse Entered!');
});

document.getElementById('hoverBox').addEventListener('mouseleave', () => {
  alert('Mouse Left!');
});
```

### Example: Keypress

```js
document.addEventListener('keydown', (e) => {
  console.log(`You pressed ${e.key}`);
});
```

---

## 🧠 Summary

| Concept          | Description                                     |
| ---------------- | ----------------------------------------------- |
| Event            | User/browser-triggered activity                 |
| Event Target     | Element where the event occurred                |
| addEventListener | Method to handle event on elements              |
| preventDefault() | Stops the default action of the event           |
| Event Delegation | Efficient event handling using parent container |
| DOMContentLoaded | Ensures DOM is ready before running JS          |

---

## 🌐 Favicon Tip

Want to add a favicon to your project?
Add this in your HTML `<head>`:

```html
<link rel="icon" href="https://example.com/favicon.ico" type="image/x-icon">
```

📝 Recommended favicon generators:

- [https://favicon.io](https://favicon.io)
- [https://realfavicongenerator.net](https://realfavicongenerator.net)

---

## 📸 Resources and Visuals

- [Event Delegation - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
-

---

