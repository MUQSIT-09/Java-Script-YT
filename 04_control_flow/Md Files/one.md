# 🧠 JavaScript `if` Statements

In JavaScript, **if statements** allow us to make decisions in our code. Based on conditions, we can execute specific blocks of code. Let’s break it down with examples! 🚀

---

## 🏗️ **Basic Syntax**

```javascript
if (condition) {
    // Code to run if the condition is true
}
```

✅ **Example:**

```javascript
let temperature = 41;

if (temperature > 40) {
    console.log("It’s really hot! 🥵");
}
```

---

## 📊 **Comparison Operators**

You can use these operators to make conditions:

| Operator | Description                | Example        | Result  |
|----------|----------------------------|----------------|---------|
| `==`     | Equal to (loose equality)   | `5 == "5"`     | `true`  |
| `===`    | Strict equal to             | `5 === "5"`    | `false` |
| `!=`     | Not equal to                | `5 != "6"`     | `true`  |
| `!==`    | Strict not equal            | `5 !== "5"`    | `true`  |
| `<`      | Less than                   | `3 < 5`        | `true`  |
| `<=`     | Less than or equal to       | `5 <= 5`       | `true`  |
| `>`      | Greater than                | `7 > 3`        | `true`  |
| `>=`     | Greater than or equal to    | `10 >= 11`     | `false` |

---

## ⚡ **If-Else Example**

```javascript
let balance = 1000;

if (balance > 500) {
    console.log("You're rich! 💸");
} else {
    console.log("Time to save some money! 🏦");
}
```

---

## 🔁 **Else-If Ladder**

```javascript
let score = 75;

if (score >= 90) {
    console.log("Grade: A 🏅");
} else if (score >= 80) {
    console.log("Grade: B 🎉");
} else if (score >= 70) {
    console.log("Grade: C 👍");
} else {
    console.log("Grade: F 😢");
}
```

---

## ⚙️ **Logical Operators**

You can combine conditions with logical operators:

| Operator | Description                  | Example                         | Result  |
|----------|------------------------------|--------------------------------|---------|
| `&&`     | Logical AND (both true)       | `true && false`                 | `false` |
| `||`     | Logical OR (one is true)      | `true || false`                 | `true`  |
| `!`      | Logical NOT (negation)        | `!true`                         | `false` |

✅ **Example:**

```javascript
const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
    console.log("Access granted! ✅");
}
```

---

## ⚡ **One-Liner If (Ternary Operator)**

```javascript
let age = 20;
age >= 18 ? console.log("Adult 🏆") : console.log("Minor 🧒");
```

---

Master these `if` statements and take your coding skills to the next level! 🌟
