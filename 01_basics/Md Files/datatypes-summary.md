# JavaScript Data Types Explained ✨

JavaScript has two categories of data types:

## 1. 🔥 Primitive Data Types
Primitive types are immutable and directly contain the value assigned.

### 📈 Types of Primitive Data Types:
- **Number**: For integers and floating-point numbers.
- **String**: For textual data.
- **Boolean**: Represents true or false.
- **null**: Represents an intentional absence of value.
- **undefined**: Denotes a variable that has been declared but not assigned a value.
- **Symbol**: Provides unique identifiers.
- **BigInt**: For very large integers.

```javascript
// Examples:
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

// Symbol Example:
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false

// BigInt Example:
const bigNumber = 3456543576654356754n;
```

## 2. 🔄 Reference (Non-Primitive) Data Types
Reference types are objects that store references to values rather than the values themselves.

### 🔖 Types of Reference Data Types:
- **Array**: Ordered collection of items.
- **Object**: Collection of key-value pairs.
- **Function**: A callable object.

```javascript
// Examples:
const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Azad",
    age: 52,
};

const myFunction = function() {
    console.log("Hello world");
};
```

## 🔢 Checking Data Types
You can use `typeof` to check the data type of a variable:

```javascript
console.log(typeof anotherId); // symbol
```

## 🔍 Data Type Conversion
Refer to the ECMAScript specification for detailed type conversions: [ECMAScript Data Types](https://262.ecma-international.org/5.1/#sec-11.4.3)

## 📊 Summary of Data Types:

1) **Primitive Data Types:**
   - Number ➡️ `number`
   - String ➡️ `string`
   - Boolean ➡️ `boolean`
   - null ➡️ `object` (weird, but true!)
   - undefined ➡️ `undefined`
   - Symbol ➡️ `symbol`
   - BigInt ➡️ `bigint`

2) **Non-Primitive Data Types:**
   - Array ➡️ `object`
   - Function ➡️ `function`
   - Object ➡️ `object`

Happy coding! 🚀

