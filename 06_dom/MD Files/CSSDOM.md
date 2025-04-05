---

# 🎨 Applying CSS via JavaScript DOM

## 🌟 Introduction

This markdown document provides a structured guide on how to dynamically manipulate CSS styles using JavaScript and the DOM. It explains the various ways to apply, modify, and interact with CSS through different DOM properties and methods.

---

## 🧱 HTML Structure Example

```html
<body>
  <div id="fdiv" class="shah rukh" style="background-color: aqua;padding: 2rem;">
    first div
    <p id="fpara" style="color: green;padding: 1rem;">first para</p>
    <div id="sdiv" style="background-color: rgb(223, 226, 15);padding: 1.2rem;">
      second div
      <p id="spara" style="background-color: rgb(133, 31, 227);padding: 0.8rem;">
        second para
      </p>
    </div>
  </div>
</body>
```

---

## 🎯 1. `style` Property

### 📌 Description

- Used to get or set **inline CSS styles** of an element.
- Limitation: You can only set one property at a time.

### 💡 Example

```js
let paraElement = document.querySelector('#spara');
paraElement.style.backgroundColor = 'yellow';
```

### ✅ Output

The `#spara` paragraph's background becomes yellow.

---

## 🧩 2. `style.cssText`

### 📌 Description

- Allows setting **multiple CSS properties** in one go.
- Completely **overwrites** existing inline styles.

### 💡 Example

```js
let spara = document.querySelector('#spara');
spara.style.cssText = "background-color: black; padding: 1rem; color: white";
```

### ✅ Output

Text color changes to white, background becomes black, padding adjusts to 1rem.

---

## 🏷️ 3. `setAttribute()`

### 📌 Description

- Can set **any HTML attribute** (class, style, id, etc.).
- Replaces the entire attribute, removing previous values.

### 💡 Example

```js
let myDiv = document.querySelector('#spara');
myDiv.setAttribute('class', 'secondpara');
```

### ✅ Output

The class of `#spara` is changed to `secondpara`, replacing the previous classes.

---

## 🧾 4. `className`

### 📌 Description

- Used to **get, set, or overwrite** the class name(s) as a string.

### 💡 Example

```js
let fdiv = document.querySelector('#fdiv');
fdiv.className = 'lenga anni';
```

### ✅ Output

Class name becomes exactly `lenga anni`.

---

## 🧰 5. `classList`

### 📌 Description

Provides methods for:

- `add()` – add new class
- `remove()` – remove a class
- `toggle()` – add if not present, remove if present
- `contains()` – check existence

### 💡 Example

```js
let fdiv = document.querySelector('#fdiv');
fdiv.classList.add('khan');
fdiv.classList.remove('anni');
fdiv.classList.toggle('lenga');
console.log(fdiv.classList.contains('lenga'));
```

### ✅ Output

- `'khan'` added to the class list.
- `'anni'` removed.
- `'lenga'` toggled on/off.
- `contains('lenga')` returns `true` or `false`.

---

## 🧠 Summary

| Property/Method | Purpose                          | Supports Multiple Styles? | Notes                                |
| --------------- | -------------------------------- | ------------------------- | ------------------------------------ |
| `style`         | Inline style manipulation        | ❌                         | One property at a time               |
| `style.cssText` | Set multiple styles at once      | ✅                         | Replaces all inline styles           |
| `setAttribute`  | Set attributes like style, class | ✅                         | Overwrites existing style attribute  |
| `className`     | Get/Set class as a string        | ❌                         | Overwrites all classes               |
| `classList`     | Add/Remove/Toggle/Check classes  | ✅                         | Most flexible for class manipulation |

---

##
