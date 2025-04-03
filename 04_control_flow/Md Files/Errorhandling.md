# Error Handling in JavaScript

## 🔧 Types of Errors

### 🔖 Compile-Time Error
- These errors occur while parsing the program before execution.
- **Example: Syntax Error**
  ```js
  console.log(1;  // Missing closing parenthesis
  ```

### ⚡ Run-Time Error
- These errors occur while the program is executing.
- **Example: ReferenceError**
  ```js
  console.log(x);   // ReferenceError: x is not defined
  ```

## ✅ Handling Errors Using `try-catch-finally`
### 🔒 Try-Catch Mechanism
- The `try` block contains the code where an error might occur.
- The `catch` block handles the error and prevents program interruption.
- The `finally` block executes regardless of whether an error occurs.

#### Example:
```js
try {
    console.log("This is the Try block Start");
    console.log(x); // ReferenceError: x is not defined
    console.log("This is the Try block End");
} catch (error) {
    console.log("I am inside the catch block");
    console.log(error);
} finally {
    console.log("I will always get executed");
}
```
##### Output:
```
This is the Try block Start
I am inside the catch block
ReferenceError: x is not defined
I will always get executed
```

---
## 🔧 Throwing Custom Errors
- We can manually throw errors using the `throw` keyword.
- This is commonly used in APIs, validation checks, etc.

#### Example:
```js
try {
    console.log(x);
} catch (error) {
    throw new Error("Brother, first declare then print it.");
}
```
##### Output:
```
Error: Brother, first declare then print it.
```

#### Custom Validation Example:
```js
let errorCode = 101;
if (errorCode === 101) {
    throw new Error("Invalid Username");
}
```
##### Output:
```
Error: Invalid Username
```

---
## 💡 Best Practices
- Always use `try-catch` when dealing with **uncertain** or **external** data sources.
- Use `throw` for **custom error messages** in APIs or validations.
- `finally` is useful for cleanup operations like closing files or clearing memory.

With this, you can **gracefully handle errors** in your JavaScript applications! 🚀

