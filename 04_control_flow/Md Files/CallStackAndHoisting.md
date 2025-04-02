# Call Stack and Hoisting in JavaScript

## 📌 Introduction

JavaScript is a single-threaded language, meaning it executes one statement at a time. To handle this execution efficiently, JavaScript uses a **Call Stack** and a mechanism called **Hoisting**. Understanding these concepts is crucial for debugging and writing efficient code.

---

## 📚 Call Stack in JavaScript

The **Call Stack** is a data structure that records function execution in JavaScript. It follows the **Last In, First Out (LIFO)** principle.

### 🔹 How the Call Stack Works

1. **Function Invocation:** When a function is called, it gets pushed onto the stack.
2. **Function Execution:** The function executes, and if it calls another function, the new function is added to the top of the stack.
3. **Function Completion:** Once a function finishes execution, it is popped off the stack.
4. **Stack Overflow:** If too many function calls are nested, the stack reaches its limit and throws a `RangeError` (Stack Overflow Error).

### 🖥 Example of Call Stack Execution

```javascript
function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
  third();
}

function third() {
  console.log("Third function");
}

first();
```

**Call Stack Execution:**

1. `first()` is called → pushed onto the stack
2. Inside `first()`, `second()` is called → pushed onto the stack
3. Inside `second()`, `third()` is called → pushed onto the stack
4. `third()` executes → popped from the stack
5. `second()` completes → popped from the stack
6. `first()` completes → popped from the stack

### ❌ Stack Overflow Example

```javascript
function recursive() {
  recursive(); // Infinite recursion leads to stack overflow
}

recursive(); // This will crash with a "Maximum call stack size exceeded" error
```

---

## 🚀 Hoisting in JavaScript

**Hoisting** is JavaScript's behavior of moving declarations (not initializations) to the top of their scope before execution.

### 🔹 How Hoisting Works

1. **Function declarations** are fully hoisted, meaning you can call a function before it appears in the code.
2. **Variable declarations (********`var`********\*\*\*\*\*\*\*\*\*\*\*\*)** are hoisted but initialized with `undefined`.
3. **`let`**\*\* and \*\***`const`** variables are hoisted but remain in the **Temporal Dead Zone (TDZ)** until assigned a value.

### 🖥 Function Hoisting Example

```javascript
myFunction(); // ✅ This works due to function hoisting

function myFunction() {
  console.log("Function called!");
}
```

**Behind the scenes (After Hoisting):**

```javascript
function myFunction() {
  console.log("Function called!");
}

myFunction();
```

### 🖥 Variable Hoisting Example

```javascript
console.log(myVar); // Output: undefined
var myVar = "Hello";
console.log(myVar); // Output: Hello
```

**Behind the scenes (After Hoisting):**

```javascript
var myVar; // Declaration is hoisted
console.log(myVar); // undefined
myVar = "Hello";
console.log(myVar); // Hello
```

### 🚨 `let` and `const` Hoisting Example

Unlike `var`, variables declared with `let` and `const` do not get initialized at the top.

```javascript
console.log(myLet); // ❌ ReferenceError: Cannot access 'myLet' before initialization
let myLet = "Hello";
```

---

## 🛠 Best Practices to Avoid Hoisting Issues

✔ Always declare variables at the top of their scope.

✔ Use `let` and `const` instead of `var` to avoid unexpected behavior.
\
✔ Declare functions before calling them for better readability.\

✔ Be aware of the **Temporal Dead Zone** when using `let` and `const`.

---

## 🎯 Conclusion

Understanding the **Call Stack** and **Hoisting** helps in debugging and writing efficient JavaScript code. While hoisting allows for flexibility, it can lead to confusing bugs if not handled properly. Always write clean, structured code to avoid unintended behaviors.

---



