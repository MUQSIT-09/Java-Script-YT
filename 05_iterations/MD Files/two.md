# ♻️ JavaScript While Loop

In JavaScript, the **while loop** executes a block of code as long as the specified condition is `true`.

## 🔒 Syntax:
```javascript
while (condition) {
  // code to execute
}
```
If the condition is `false` initially, the code inside the `while` loop will never execute.

## 🔄 Example 1: Simple While Loop
```javascript
let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}
```
### Output:
```
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10
```

## 🔄 Example 2: Iterating Through an Array
```javascript
let myArray = ['flash', 'batman', 'superman'];
let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}
```
### Output:
```
Value is flash
Value is batman
Value is superman
```

# ♻️ JavaScript Do-While Loop

The **do-while loop** executes a block of code once, before checking if the condition is `true`. If the condition is `true`, the loop will repeat as long as the condition remains `true`.

## 🔒 Syntax:
```javascript
do {
  // code to execute
} while (condition);
```
Even if the condition is `false` initially, the code inside the `do-while` loop will run at least once.

## 🔄 Example 3: Do-While Loop
```javascript
let score = 11;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);
```
### Output:
```
Score is 11
```
**Explanation:**
- The code runs once because `do` executes the block first before checking the condition.
- In this case, `score` is `11` initially, so after the first execution, the condition `score <= 10` fails, and the loop stops.

## ✅ Key Points to Remember:
- The **while loop** checks the condition first. If false, it won’t run at all.
- The **do-while loop** runs at least once, even if the condition is false.
- Always ensure that the loop modifies the condition variable to avoid infinite loops.

🔗 [MDN Documentation on Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

Happy coding! 🚀

