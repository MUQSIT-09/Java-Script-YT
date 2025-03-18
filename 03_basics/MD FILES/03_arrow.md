# 🌐 JavaScript: `this` and Arrow Functions

## 📌 Understanding `this`
- The `this` keyword refers to the current context.
- In objects, `this` points to the object itself.

```javascript
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);  // hitesh , welcome to website
        console.log(this);  // { username: 'hitesh', price: 999, welcomeMessage: [Function: welcomeMessage] }
    }
}
user.welcomeMessage();
```

### 🔄 Changing Context
- Changing `username` updates the context:
```javascript
user.username = "sam"
user.welcomeMessage(); // sam , welcome to website
```

### 🌍 Global Context
- In **Node.js**, `this` in the global context is an empty object:
```javascript
console.log(this); // {} in Node.js
```
- In **Browser**, `this` refers to the `window` object.

---

## ⚠️ `this` in Regular Functions
- Inside regular functions, `this` does **not** point to the current context:
```javascript
function chai(){
    let username = "hitesh";
    console.log(this.username); // undefined
}
chai();
```

### 📍 Function Expression
- `this` behaves the same in function expressions:
```javascript
const chai = function () {
    let username = "hitesh";
    console.log(this.username); // undefined
}
chai();
```

---

## 🏹 Arrow Functions
- Arrow functions do **not** have their own `this` — they inherit from the surrounding scope.
```javascript
const chai = () => {
    let username = "hitesh";
    console.log(this); // {}
}
chai();
```

### ➕ Arrow Functions with Parameters
```javascript
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4)); // 7
```

### ⚡ Implicit Return
- Arrow functions support implicit return:
```javascript
const addTwo = (num1, num2) => num1 + num2; // 7
const addTwo = (num1, num2) => (num1 + num2); // 7
```

### 📦 Returning Objects
- Wrap objects in parentheses when using implicit returns:
```javascript
const getUser = () => ({ username: "hitesh" }); // { username: 'hitesh' }
```

---

## 🔁 Arrow Functions in Loops
- `forEach` with arrow functions:
```javascript
const myArray = [2, 5, 3, 7, 8];
myArray.forEach((item) => console.log(item));
```

---

✨ **Quick Recap:**
- `this` behaves differently in arrow functions and regular functions.
- Arrow functions don't have their own `this`.
- Use implicit returns for cleaner code.


Happy Coding! 🚀

