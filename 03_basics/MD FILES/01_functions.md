# 🌐 JavaScript Functions - Comprehensive Guide

Master the art of writing functions in JavaScript with this comprehensive guide! 🚀 Dive into function declarations, parameters, arguments, and more. Each section is explained with code snippets and output comments for better understanding.

---

## 📌 What Are Functions?
Functions are reusable blocks of code designed to perform a particular task. They help organize code, improve readability, and avoid repetition.

---

## 🟩 1. Function Declaration
A function declaration defines a named function with the `function` keyword.
```javascript
// Function Declaration                                                                            

sayMyName() (Hoisted function called before declaration)  <--------------------------------------
                                                                                                | 
function sayMyName() {                                                                          |
    console.log("H");                                                                           |
    console.log("I");                                                                           |
    console.log("T");                                                                           |
    console.log("E");                                                                           |
    console.log("S");                                                                           |
    console.log("H");                                                                           |
                                                                                                |
sayMyName();  // Function Call it is hoisted moved to top, called before declaration  ---------->
// Output:
// H
// I
// T
// E
// S
// H
```
✅ **Key Points:**
- Hoisted to the top, meaning they can be called before declaration.
- Defined with the `function` keyword and a name.

---

## 🟩 2. Function with Parameters and Arguments
Functions can accept parameters, which act as placeholders for values passed during the function call.
```javascript
// Function with Parameters and Arguments
function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result;  // Stops execution after return
}

const result = addTwoNumbers(3, 5);  // 3 and 5 are arguments
console.log("Result:", result);  // Output: Result: 8
```
✅ **Key Points:**
- Parameters: Variables listed as part of the function definition.
- Arguments: Values passed to the function when calling it.

---

## 🟩 3. Default Parameters and Handling Undefined Values
Default parameters allow you to set a default value if no argument is provided.
```javascript
// Function with Default Parameter
function loginUserMessage(username = "sam") {
    if (!username) {  // Checks for undefined, null, or empty string
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// Outputs
console.log(loginUserMessage(""));        // Output: just logged in
console.log(loginUserMessage(null));      // Output: null just logged in
console.log(loginUserMessage("Azam"));    // Output: Azam just logged in
```
✅ **Key Points:**
- Default parameters prevent `undefined` values.
- Use logical operators to handle empty values.

---

## 🟩 4. Rest Parameters (Handling Multiple Arguments)
Rest parameters collect all additional arguments into an array.
```javascript
// Using Rest Parameters
function calculateCartPrice(val1, val2, ...num1) { // Rest operator gathers remaining arguments
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));  // Output: [500, 2000]
```
✅ **Key Points:**
- Allows functions to accept indefinite numbers of arguments.
- The rest parameter must be the last parameter.

---

## 🟩 5. Functions with Objects as Parameters
You can pass objects as function parameters to handle structured data.
```javascript
// Passing Objects to Functions
const user = {
    username: "hitesh",
    prices: 199
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// Function Call
handleObject({
    username: "sam",
    price: 399
});
// Output: Username is sam and price is 399
```
✅ **Key Points:**
- Passing objects as arguments simplifies handling grouped data.
- Use object destructuring for cleaner code.

---

## 🟩 6. Functions with Arrays as Parameters
Functions can accept arrays as parameters to work with lists of values.
```javascript
// Passing Arrays to Functions
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));  // Output: 400
console.log(returnSecondValue([200, 400, 500, 1000]));  // Output: 400
```
✅ **Key Points:**
- Simplifies handling multiple values.
- Can combine with spread/rest operators for flexible inputs.

---

## 🏆 Types of Functions in JavaScript
1. **Function Declaration**: Traditional way of defining functions. Can be hoisted.
2. **Function Expression**: Assigning functions to variables.
3. **Arrow Functions**: Shorter syntax for writing functions.
4. **Immediately Invoked Function Expressions (IIFE)**: Runs as soon as defined.
5. **Anonymous Functions**: Functions without a name, often used in callbacks.
6. **Constructor Functions**: Used to create objects.

---

## 🚀 Key Takeaways
- Functions improve code reusability and modularity.
- Use default parameters to avoid undefined values.
- Rest parameters handle dynamic inputs effortlessly.
- Objects and arrays as parameters simplify passing complex data.

Mastering functions is crucial for writing efficient JavaScript code. Keep practicing and exploring different types to level up your skills! 🌟

---

Ready to dive deeper? Explore more about closures, callbacks, and promises next! 📚
