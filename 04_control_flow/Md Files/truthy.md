# Truthy and Falsy Values in JavaScript

## Falsy Values:
In JavaScript, the following values are considered falsy:
- `false`
- `0`
- `-0`
- `BigInt 0n`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

## Truthy Values:
Everything else is considered truthy, for example:
- "0" (string containing zero)
- 'false' (string containing the word false)
- " " (string with space)
- `[]` (empty array)
- `{}` (empty object)
- `function(){}` (empty function)

```javascript
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
// Output: Got user email

if (userEmail.length === 0) {
    console.log("Array is empty");
}
// Output: Array is empty

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// Output: Object is empty
```

---

## Nullish Coalescing Operator (??)
This operator returns the right-hand value if the left-hand value is `null` or `undefined`. It’s useful when fetching data from a database to avoid `null` or `undefined` errors.

```javascript
let val1;
val1 = 5 ?? 10
console.log(val1); // Output: 5

val1 = null ?? 10
console.log(val1); // Output: 10

val1 = undefined ?? 15
console.log(val1); // Output: 15

val1 = null ?? 10 ?? 20
console.log(val1); // Output: 10
```

---

## Ternary Operator
A concise way to write conditional expressions.

**Syntax:**
```javascript
condition ? expression_if_true : expression_if_false
```

Example:
```javascript
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
// Output: more than 80
```

---

This covers truthy and falsy values, nullish coalescing, and ternary operators with examples and outputs. Happy coding! 🚀

