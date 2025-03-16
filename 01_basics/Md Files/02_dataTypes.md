# 🌐 JavaScript Data Types

JavaScript has **7 primitive data types** and **1 non-primitive data type (Object)**. Let’s break them down! 🚀

## 📝 Primitive Data Types
1. **Number**: Represents numerical values.
   - Range: `-(2^53 - 1)` to `(2^53 - 1)`.
   ```javascript
   let age = 18; // Number
   ```
2. **BigInt**: For numbers beyond the `Number` limit.
   ```javascript
   let bigNumber = 12345678901234567890n; // BigInt
   ```
3. **String**: Textual data enclosed in quotes (`""` or `''`).
   ```javascript
   let name = "Hitesh"; // String
   ```
4. **Boolean**: Represents true/false values.
   ```javascript
   let isLoggedIn = false; // Boolean
   ```
5. **Null**: Intentionally empty value.
   - Type is `object` (a known JavaScript quirk).
   ```javascript
   let temperature = null; // Null
   ```
6. **Undefined**: Variable declared but not assigned a value.
   ```javascript
   let state; // Undefined
   ```
7. **Symbol**: Unique identifiers, often used in libraries like Figma.
   ```javascript
   let uniqueId = Symbol('id'); // Symbol
   ```

## 📦 Non-Primitive Data Type
- **Object**: Collection of key-value pairs.
   ```javascript
   let user = { name: "Hitesh", age: 18 }; // Object
   ```

## 📊 Type Checking
```javascript
console.log(typeof undefined); // 'undefined'
console.log(typeof null);      // 'object' (quirk!)
```

## ⚡ Key Points
- **Use `"use strict"`** for writing cleaner code and avoiding silent errors.
- Always prioritize **code readability**.
- Remember that `null` is **intentional absence of value**, while `undefined` means **no value assigned**.

Stay curious and keep coding! 🚀

