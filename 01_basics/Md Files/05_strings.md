# JavaScript Strings and Methods

## Introduction
Strings in JavaScript are not arrays but key-value pairs, where each character has an index.

```javascript
const name = "Substitute";
const repoCount = 50;

// Old way of concatenation:
console.log(name + repoCount + " Value");

// Modern way: String Interpolation (Template Literals)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Output: Hello my name is Substitute and my repo count is 50
```

## String Creation
```javascript
// Creating a String Object
const gameName = new String('Subway-hc-com');
console.log(gameName[0]); // Output: S
console.log(gameName.__proto__); // {} (Reference to String Prototype)
```

## String Properties and Methods
```javascript
// Length
console.log(gameName.length); // Output: 13

// Change Case
console.log(gameName.toUpperCase()); // Output: SUBWAY-HC-COM

// Character at Specific Index
console.log(gameName.charAt(2)); // Output: b

// Index of a Character (Returns -1 if not found)
console.log(gameName.indexOf('t')); // Output: -1

// Substring (Extracts part of the string, does not accept negative indexes)
const newString = gameName.substring(0, 4);
console.log(newString); // Output: Subw

// Slice (Accepts negative indexes)
const anotherString = gameName.slice(-8, 4); // No output due to invalid range
const anotherString1 = gameName.slice(2, 4);
console.log(anotherString1); // Output: bw

// Trim (Removes whitespace from both ends)
const newStringOne = "   spaces    ";
console.log(newStringOne.trim()); // Output: spaces

// Replace (Replaces part of the string)
const url = "https://hitesh.com/leni%20choudhary";
console.log(url.replace('%20', '-')); // Output: https://hitesh.com/leni-choudhary

// Includes (Checks if the string contains a specific substring)
console.log(url.includes('okay')); // Output: false

// Split (Splits the string into an array)
console.log(gameName.split('-')); // Output: [ 'Subway', 'hc', 'com' ]
```

## String Interpolation
```javascript
// Old way of string concatenation:
// let a = prompt("What is your name");
// let b = prompt("What is your age");
// document.write("My name is " + a + " and I am " + b + " years old.");

// Modern way: Template Literals
// let a = prompt("What is your name");
// let b = prompt("What is your age");
// document.write(`Hello, my name is ${a} and I'm ${b} years old.`);
```

## Additional Notes
- String methods like `splitStart()` and `splitEnd()` can be explored for more control over string splitting.
- Always use template literals for cleaner and more readable code when concatenating strings.

Mastering these string methods will greatly improve your ability to manipulate text in JavaScript. 🚀

