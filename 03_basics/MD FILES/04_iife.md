# ⚡ JavaScript: Immediately Invoked Function Expressions (IIFE)

## 📌 What is IIFE?
- **IIFE** stands for **Immediately Invoked Function Expression**.
- It’s a function that runs immediately after being defined.
- Helps encapsulate code, maintain a clean global scope, and prevent naming collisions.

### 🛡️ Why Use IIFE?
- Avoid polluting the global scope.
- Useful when you want to connect to a database or run some initialization code immediately.

### ⚙️ Syntax
```javascript
(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`); // DB CONNECTED
})();
```

- **`()`** — First pair wraps the function definition.
- **`()()`** — Second pair calls the function immediately.

### ⚠️ Important Note
- Always end the IIFE with a **semicolon (;)** to avoid errors if other functions follow.

```javascript
// Without semicolon, the next IIFE may not execute properly.
(function chai(){
    console.log(`DB CONNECTED`); // DB CONNECTED
})();

// Unnamed (Simple) IIFE with Parameters
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`); // DB CONNECTED TWO Krishnakunj
})('Krishnakunj');
```

---

✨ **Quick Recap:**
- IIFE is used for immediate invocation of functions.
- Keeps variables private and avoids polluting the global namespace.
- Handy for database connections, initialization, and setup code.

![JavaScript Logo](https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png)

Happy Coding! 🚀

