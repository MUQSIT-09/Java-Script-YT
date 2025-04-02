# Variable Scoping and Temporal Dead Zone in JavaScript

## 📌 Introduction

Understanding **variable scoping** and the **Temporal Dead Zone (TDZ)** is crucial for writing predictable and bug-free JavaScript code. JavaScript has three types of scopes:

1. **Global Scope**
2. **Function Scope**
3. **Block Scope**

Additionally, variables declared with `let` and `const` enter a **Temporal Dead Zone (TDZ)** until they are initialized.

---

## 🌎 Global Scope

A **globally scoped variable** is accessible from anywhere in the script, including inside functions, loops, and conditionals.

### 🖥 Example of Global Scope:

```javascript
let a = 10;
const b = 10;
var c = 10;

console.log(a);  // 10
console.log(b);  // 10
console.log(c);  // 10

for(let i=0; i<3; i++){
    console.log("1 Loop:", a);  // 1 Loop: 10  
    console.log("2 Loop:", b);  // 2 Loop: 10
    console.log("3 Loop:", c);  // 3 Loop: 10
}

function sayhello() {
    console.log("1 function:", a); // 1 function: 10
    console.log("2 function:", b); // 2 function: 10
    console.log("3 function:", c); // 3 function: 10
}
sayhello();
```

✅ **All variables (********`a`********, ********`b`********, ********`c`********) are accessible inside the function and loops because they are declared in the global scope.**

---

## 🔹 Function Scope

Variables declared inside a function using `var`, `let`, or `const` are **not accessible** outside the function.

### 🖥 Example of Function Scope:

```javascript
function lingi() {
    var fullname = "Linga";
    let halfname = "Lingi";
    const surname = "Stark";

    console.log(fullname);  // Linga
    console.log(halfname);  // Lingi
    console.log(surname);   // Stark
}

lingi();

console.log(fullname); // ❌ ReferenceError: fullname is not defined
console.log(halfname); // ❌ ReferenceError: halfname is not defined
console.log(surname);  // ❌ ReferenceError: surname is not defined
```

✅ **`fullname`****\*\*\*\*, ********`halfname`********, and ********`surname`******** are only accessible inside ********`lingi()`******** function.**

---

## 🔸 Block Scope

A **block** is defined by `{}` (curly braces), and variables declared with `let` or `const` inside a block are only accessible within that block.

However, `var` does not have block scope and behaves as a global variable.

### 🖥 Example of Block Scope:

```javascript
console.log(size);  // Undefined (var is hoisted)
{
    var size = 6;
}
console.log(size);  // 6 ✅ (var is accessible outside the block)

{
    let age = 6;
}
console.log(age);   // ❌ ReferenceError: age is not defined

{
    const age = 6;
}
console.log(age);   // ❌ ReferenceError: age is not defined
```

✅ **`var`**\*\* is not block-scoped, while ****`let`**** and ****`const`**** are.\*\*

---

## ⚠️ Temporal Dead Zone (TDZ)

The **Temporal Dead Zone (TDZ)** is the period from entering a scope until the variable is declared and initialized. Accessing a variable during this time results in a **ReferenceError**.

### 🖥 Example of Temporal Dead Zone:

```javascript
console.log(marks);  // ❌ ReferenceError: marks is not defined
console.log("Starks");
let me = 6;          // Still in TDZ until initialized
console.log("Lanisters");
marks = 64;
console.log(marks);  // ✅ Prints: 64
console.log(me);     // ✅ Prints: 6
```

### 🔹 How TDZ Works:

- `marks` is accessed before it is declared → **ReferenceError**
- `me` exists in the **TDZ** until `let me = 6;` is executed

✅ **`let`**\*\* and ****`const`**** variables are hoisted but remain in the TDZ until initialized.\*\*

---

## 🛠 Best Practices

✔ Always **declare variables at the beginning** of their scope to avoid confusion.
\
✔ Prefer `let` and `const` over `var` to prevent scope-related issues.
\
✔ Be mindful of the **Temporal Dead Zone** when using `let` and `const`.

---

## 🎯 Conclusion

Understanding **Variable Scoping** and **Temporal Dead Zone** helps write better JavaScript code by preventing errors and improving maintainability. Using `let` and `const` properly ensures variables are scoped correctly and avoids unexpected behaviors caused by hoisting and the TDZ.

🛠 **Write clean and structured code for better debugging and efficiency! 🚀**

