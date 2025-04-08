# 🔒 Closures in JavaScript

## 📘 What is a Closure?

A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**). In JavaScript, closures are created every time a function is created, at function creation time.

> **Definition:** A closure is a function that remembers variables from the place where it was defined, regardless of where it is executed later.

---

## 🔁 Basic Structure

```js
function outerFunction() {
    let outerVariable = "I'm from outer";

    function innerFunction() {
        console.log(outerVariable); // Has access to outerVariable
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: I'm from outer
```

---

## 🧪 Example from User:

```js
let name = "Leni";

function outerfunction() {
    let name = "Linga";
    {
        let name = "Anni"; // Block scoped
    }

    function innerfunction() {
        // Closure is created here
        console.log(name); // Refers to "Linga"
    }

    return innerfunction;
}

let inner = outerfunction();
inner(); // Output: Linga
```

### 📌 Explanation:

- Even though the `outerfunction` has returned, the `innerfunction` still remembers the value of `name` from `outerfunction`.
- This happens because `innerfunction` has **closed over** the `name` variable.
- Block scoped `name = "Anni"` doesn't affect the result because it's not accessible outside the block.

---

## ✅ Real World Use Cases of Closures

### 1. **Data Privacy / Encapsulation**

```js
function secretHolder(secret) {
    return function() {
        return `The secret is: ${secret}`;
    };
}

const getSecret = secretHolder("12345");
console.log(getSecret()); // Output: The secret is: 12345
```

### 2. **Function Factories**

```js
function multiplier(x) {
    return function(y) {
        return x * y;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
```

### 3. **Event Handlers**

```js
function setupButton(name) {
    document.querySelector("button").addEventListener("click", function() {
        alert("Hello, " + name);
    });
}

setupButton("Muqsit");
```

---

## ⚠️ Common Mistakes

- **Confusing scope chains**: Be mindful of which variable is being referred to in nested functions.
- **Memory leaks**: Be cautious while holding large objects in closures inside long-lived functions (like event handlers).

---

## 🧠 Key Takeaways

| Concept | Description                                                    |
| ------- | -------------------------------------------------------------- |
| Closure | Function + Lexical Environment                                 |
| Scope   | Determined by where variables are declared                     |
| Memory  | Inner function keeps reference even after outer function exits |

---

## 📎 Resources

- [MDN Web Docs - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [JavaScript.info - Closures](https://javascript.info/closure)

---



