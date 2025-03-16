# 🚀 JavaScript For Loops

In JavaScript, loops help you execute a block of code multiple times. The **for loop** is one of the most commonly used loops, and it provides a concise way to iterate over data.

## 📌 Basic For Loop
```javascript
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number"); // Output: 5 is best number
    }
    console.log(element); // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}
```

## 🔁 Nested For Loop (Multiplication Table)
```javascript
for (let i = 1; i <= 3; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
```
**Output:**
```
Outer loop value: 1
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
Outer loop value: 2
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
Outer loop value: 3
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
```

## 📋 Looping Through Arrays
```javascript
let myArray = ["flash", "batman", "superman"];
console.log(myArray.length); // Output: 3

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element); // Output: flash, batman, superman
}
```

## 🛑 Break and Continue Statements
### Break (Stops the loop)
```javascript
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`); // Output: Detected 5
        break; // Stops further execution
    }
    console.log(`Value of i is ${index}`); // Output: 1, 2, 3, 4
}
```

### Continue (Skips the current iteration)
```javascript
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        continue; // Skips iteration when index is 5
    }
    console.log(`Value of i is ${index}`); // Output: 1, 2, 3, 4, 6, 7, 8, 9, 10
}
```

## ⭐ Additional Example: Finding Even Numbers
```javascript
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`); // Output: 2, 4, 6, 8, 10
    }
}
```

## 🎉 Conclusion
- Use **for loops** to iterate over numbers, arrays, and more.
- **Break** stops the loop prematurely when a condition is met.
- **Continue** skips the current iteration and moves to the next.

Happy Coding! 💻

