# 🚀 JavaScript Performance Improvements

Improving the performance of JavaScript is essential for creating fast, smooth, and user-friendly web applications. In this guide, we'll walk through techniques like `performance.now()`, document fragments, and understanding browser painting behavior to boost your app's performance.

---

## ⏱️ `performance.now()`

### 📌 Description

`performance.now()` gives a high-resolution timestamp (in milliseconds) of the current time since the page started loading. It's ideal for measuring the exact time a block of code takes to execute.

### 🧪 Example 1 - Measuring Performance (Code 1)

```js
const t1 = performance.now();
for(let i = 0; i < 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para" + (i + 1);
    document.body.appendChild(para);
}
const t2 = performance.now();
console.log("The Time Taken By Code1: " + (t2 - t1));
```

### 📤 Output

Appends 100 paragraphs to the document one by one. This causes **100 reflows and repaints**, making it slower.

---

### 🧪 Example 2 - Optimized Approach (Code 2)

```js
const t3 = performance.now();
let mydiv = document.createElement('div');
for(let i = 0; i < 100; i++) {
    let para = document.createElement('div');
    para.textContent = "This is para" + (i + 1);
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
const t4 = performance.now();
console.log("The Time Taken By Code2: " + (t4 - t3));
```

### 📤 Output

Appends 100 paragraphs to a single `div` and then appends the `div` to the DOM. This causes only **1 reflow and 1 repaint**.

✅ **Code 2 is faster than Code 1**

---

## 🔍 Why Is Code 2 Faster?

### 🧱 Reflow (Layout / Resolve)

- Determines position and dimensions of elements
- **Heavy** on browser resources

### 🎨 Repaint

- Applies styles and paints pixels
- **Lighter** than reflow

> 🧠 **Performance Tip**: Reduce reflows and repaints to improve performance.

| Operation | Code 1    | Code 2 |
| --------- | --------- | ------ |
| Reflow    | 100 Times | 1 Time |
| Repaint   | 100 Times | 1 Time |

---

## 🪄 Bonus: Using DocumentFragment

### 📌 Description

A `DocumentFragment` is a lightweight DOM structure used to store DOM nodes temporarily. It doesn’t cause reflows or repaints while appending elements until it's added to the document.

### 🧪 Example

```js
let fragment = document.createDocumentFragment();

for(let i = 0; i < 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para" + (i + 64) + " Leni";
    fragment.appendChild(para); // No reflow/repaint here
}

document.body.appendChild(fragment); // 1 reflow and repaint
```

✅ **Best Practice**: Use `DocumentFragment` when adding multiple elements.

---

## 🎯 Summary Table

| Technique           | Reflows | Repaints | Speed      |
| ------------------- | ------- | -------- | ---------- |
| Direct DOM Append   | 100     | 100      | ❌ Slow     |
| Append to Container | 1       | 1        | ✅ Faster   |
| DocumentFragment    | 1       | 1        | ✅✅ Fastest |

---

## 📚 External Resources

- [MDN Web Docs - performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)
- [Reflow and Repaint](https://web.dev/avoid-large-complex-layouts/)
- [DocumentFragment on MDN](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)

---

Happy Coding! ✨

