
# 🌐 Scope of var, let, and const in JavaScript

Understanding the scope of `var`, `let`, and `const` is crucial for writing cleaner and more predictable code. Let’s break it down step by step! 🚀

---

## 📌 Key Points:

1. **const**: Once created and initialized, it **cannot be changed**.
2. **var, let**: Values can be changed if needed.
3. **Global Scope**: Variables declared inside functions and outside are **global**.
4. **Block Scope**: Declaring `var` inside if/while/else makes `var` **global** and its value changes, as shown in the example below where `c` becomes 3.

⚠️ **Avoid using `var`. Prefer `const` and `let`. Most preferred is `let` as it can be changed when necessary.**

---

## 🌟 Global Scope Example:

```javascript
var c = 300;
let a = 365;
const b = 2;
```

---

## 🔍 Block/Local Scope Example:

```javascript
if (true) {
    let a = 10;
    const b = 20;
    // b = 2; // ❌ Error: Assignment to constant variable.
    console.log("Block of B:", b);  // 20
    console.log("INNER:", a);  // 10
    c = 3;  // ✅ var c becomes global and changes value.
}

console.log(a);  // 365
console.log(b);  // 2
console.log(c);  // 3 (changed globally due to var)
```

✅ **Key Takeaway:** `let` and `const` respect block scope, while `var` leaks outside the block.

---

## 🏗️ Parent and Child Scope Example:

```javascript
function one() {
    const username = "Tech";

    function two() {
        const website = "youtube";
        console.log(username);  // ✅ Access parent scope (Tech)
    }

    two();
    console.log(website);  // ❌ ReferenceError: website is not defined
}

one();
```

✅ **Key Takeaway:** Child functions can access parent variables, but parent functions cannot access child variables.

---

## 🏙️ Nested If Scope Example:

```javascript
if (true) {
    const city = "Azerbaijan";

    if (city === "Azerbaijan") {
        const capital = "Baku";
        console.log(city + capital);  // Azerbaijan Baku
    }

    console.log(capital);  // ❌ Error: capital is not accessible outside this block.
}

console.log(city);  // ❌ Error: city is not accessible outside the outer block.
```

✅ **Key Takeaway:** Variables declared with `const` or `let` are block-scoped and cannot be accessed outside their respective blocks.

---

## ⚡ Hoisting in JavaScript:

```javascript
console.log(addone(5));  // ✅ Output: 6 (Function hoisted)

function addone(num) {
    return num + 1;
}

// ❌ Error: Cannot access 'addTwo' before initialization.
console.log(addTwo(5));

const addTwo = function (num) {
    return num + 2;
};

console.log(addTwo(5));  // ✅ Output: 7 (Called after declaration)
```

✅ **Key Takeaway:** Function declarations are hoisted, meaning they can be called before declaration. Functions assigned to variables are **not hoisted**.

---

Mastering these concepts will help you avoid bugs and write cleaner code. Keep experimenting and exploring! 🌟
