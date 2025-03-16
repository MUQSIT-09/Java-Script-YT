# 📝 JavaScript Variables: `var`, `let`, and `const`

## 📌 Introduction
In JavaScript, variables are used to store data values. Initially, `var` was the only way to declare variables, but due to its drawbacks, `let` and `const` were introduced in **ES6 (2015)**, making code more predictable and easier to debug.

---

## 🌐 `var` — Function Scoped
- `var` is **function-scoped** and **global-scoped**, but **not block-scoped**.
- Variables declared with `var` can be **redeclared** and **updated**.
- Hoisting applies to `var`, meaning it gets moved to the top of its scope during execution.

**Example:**
```javascript
console.log(phu);  // ReferenceError: phu is not defined
{
    var lingi = 31;
    var phu = 3;
}
console.log(lingi);  // 31 (accessible even outside the block)
```

**Drawback:** `var`'s global/function scope can cause unexpected behavior, especially in loops and conditional blocks.

---

## 🏗 `let` — Block Scoped
- `let` is **block-scoped**, meaning its scope is limited to the `{}` braces.
- Variables declared with `let` can be **updated** but **cannot be redeclared**.
- Prevents accidental overwriting and makes code cleaner.

**Example:**
```javascript
console.log(phu);  // ReferenceError: phu is not defined
{
    let lingi = 31;
    let phu = 3;
}
console.log(lingi);  // ReferenceError: lingi is not defined
```

---

## 🔐 `const` — Block Scoped (Immutable)
- `const` is also **block-scoped**.
- Variables declared with `const` **cannot be updated or redeclared**.
- Must be initialized at the time of declaration.

**Example:**
```javascript
const accountId = 64312;
accountId = 3;  // TypeError: Assignment to constant variable.
```

---

## 🏆 Which One Should You Use?
- **Use `const` by default** to prevent accidental reassignments.
- **Use `let` only** when you need a variable to change.
- **Avoid `var`** due to its function scope and hoisting issues.

---

## ⚙️ Example Code
```javascript
const accountId = 64312;
let accountEmail = "javascript@gmail.com";
var accountPass = "2748";
accountCity = "Hyderabad";  // Not a good practice (implicit global)
let accountState;

// Updating variables
accountEmail = "hdfc@gmail.com";
accountPass = "4352";
accountCity = "Kishanganj";

// Console outputs
console.log(accountCity);   // Output: Kishanganj
console.log(accountState);  // Output: undefined

// Displaying in table format
console.table([accountId, accountPass, accountState, accountCity]);
```
**Output:**
```
┌─────────┬──────────────┐
│ (index) │ Values       │
├─────────┼──────────────┤
│ 0       │ 64312        │
│ 1       │ '4352'       │
│ 2       │ undefined    │
│ 3       │ 'Kishanganj' │
└─────────┴──────────────┘
```

---

## 📐 Variable Naming Conventions
1. Variables can start with `$`, `_`, or a letter, but **cannot start with a number**.
2. No spaces between variable names, e.g., `shiv linga` ❌.
3. Use **CamelCase** for naming:
    - Example: `marksOfStudents`.
4. Variable names should be **meaningful** and **self-descriptive**.
5. Avoid using JavaScript **reserved keywords** as variable names.

---

## 📖 Conclusion
- ✅ Use `const` by default.
- ✅ Use `let` when you need to reassign values.
- ❌ Avoid `var` to prevent unexpected bugs.

JavaScript is all about writing clean and predictable code — choosing the right variable declaration makes a huge difference! 🚀

