# 🏗️ JavaScript Object Cloning

## 📌 What is Object Cloning?
Objects in JavaScript are dynamic, meaning we can modify their properties at runtime. **Object cloning** is the process of creating a copy of an object, either shallow or deep.

---

## 🔥 Example: Dynamic Object Modification
```js
let obj = {
    age: 12,
    weight: 68,
    height: 192
};
console.log(obj);  // { age: 12, weight: 68, height: 192 }

obj.color = "Green";
console.log(obj);  // { age: 12, weight: 68, height: 192, color: 'Green' }
```

---

## ✨ Cloning Methods
### 1️⃣ **Spread Operator (`...`)** – 🔄 Shallow Copy
```js
let src = {
    age: 12,
    weight: 68,
    height: 192
};

let dest = { ...src };

src.age = 95;  // Modify source object

console.log("src:", src);  // { age: 95, weight: 68, height: 192 }
console.log("dest:", dest); // { age: 12, weight: 68, height: 192 }
```
✅ **Does not affect `dest` because it's a new copy.**

⚠️ **If the object has nested objects, they will still be referenced!**

#### ❌ Example of Shared Reference Issue:
```js
let dest1 = src;
src.age = 96;
console.log("src:", src);  // { age: 96, weight: 68, height: 192 }
console.log("dest1:", dest1); // { age: 96, weight: 68, height: 192 } (same reference!)
```
---

### 2️⃣ **`Object.assign()`** – 🔄 Shallow Copy
```js
let dest2 = Object.assign({}, src);
console.log("src:", src);
console.log("dest2:", dest2);

// Modify clone
dest2.age = 31;
console.log("src:", src);  // { age: 95, weight: 68, height: 192 }
console.log("dest2:", dest2);  // { age: 31, weight: 68, height: 192 }
```
✅ **You can also merge multiple objects:**
```js
let leni = {
    size: 64,
    horse: 31
};

let dest3 = Object.assign({}, src, leni);
console.log(dest3);  // { age: 95, weight: 68, height: 192, size: 64, horse: 31 }
```

---

### 3️⃣ **Iteration (`for...in`)** – 🔄 Shallow Copy
```js
let dest4 = {};
for (let key in src) {
    dest4[key] = src[key];
}

console.log("src:", src);
console.log("dest4:", dest4);

// Modify source object
src.age = 90;
console.log("src:", src);  // { age: 90, weight: 68, height: 192 }
console.log("dest4:", dest4);  // { age: 95, weight: 68, height: 192 }
```
✅ **Independent copy but not deep copy**

---

## 🌊 **Deep Cloning Methods**
### 4️⃣ **`JSON.parse(JSON.stringify(obj))`** – ⚡ Deep Copy (but limited)
```js
let deepClone = JSON.parse(JSON.stringify(src));

// Modify source object
src.age = 100;
console.log("src:", src);  // { age: 100, weight: 68, height: 192 }
console.log("deepClone:", deepClone);  // { age: 95, weight: 68, height: 192 }
```
✅ Works well for **simple objects**
⚠️ **Loses functions & special values (like `undefined` & `Symbol`)**

### 5️⃣ **`structuredClone()` (Modern & Recommended) 🔥**
```js
let deepClone = structuredClone(src);

// Modify source object
src.age = 110;
console.log("src:", src);  // { age: 110, weight: 68, height: 192 }
console.log("deepClone:", deepClone);  // { age: 95, weight: 68, height: 192 }
```
✅ Best **native method** for deep cloning
✅ Handles **nested objects, functions, and special values**

### 6️⃣ **Lodash (`_.cloneDeep`)** – 🔥 Best for Complex Objects
```js
const _ = require('lodash');
let deepClone = _.cloneDeep(src);

// Modify source object
src.age = 120;
console.log("src:", src);  // { age: 120, weight: 68, height: 192 }
console.log("deepClone:", deepClone);  // { age: 95, weight: 68, height: 192 }
```
✅ **Best option** for complex objects

---

## 🏆 **Summary Table**
| Method | Type | Notes |
|---------|------|--------|
| **Spread (`...`)** | Shallow | Easy but keeps nested references |
| **`Object.assign()`** | Shallow | Merges multiple objects |
| **Iteration (`for...in`)** | Shallow | Manual process |
| **`JSON.stringify → parse`** | Deep | Removes functions & special values |
| **`structuredClone()`** | Deep | Best built-in method |
| **Lodash `_.cloneDeep`** | Deep | Best for complex objects |

🚀 **Recommendation:**
- **Use `spread` or `Object.assign()`** for shallow copies
- **Use `structuredClone()` or Lodash** for deep copies

