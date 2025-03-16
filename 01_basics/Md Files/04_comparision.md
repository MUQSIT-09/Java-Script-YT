# JavaScript Comparisons and Equality

## Basic Comparisons
```javascript
console.log(2 > 1);    // true
console.log(2 >= 1);   // true
console.log(2 < 1);    // false
console.log(2 == 1);   // false
console.log(2 != 1);   // true
```

## String and Number Comparison
JavaScript converts strings to numbers when using comparison operators.
```javascript
console.log("2" > 1);     // true  --> "2" is converted to 2
console.log("02" > 1);    // true  --> Leading zeros are ignored
```
> **Note:** Avoid mixing types in comparisons for cleaner, more predictable code.

## Null Comparison
`null` is treated as 0 in numeric comparisons but behaves differently with equality:
```javascript
console.log(null > 0);   // false (null is converted to 0)
console.log(null == 0);  // false (null only equals null or undefined)
console.log(null >= 0);  // true  (null is converted to 0)
```

## Undefined Comparison
`undefined` behaves unpredictably in comparisons. It is converted to `NaN` in numeric contexts:
```javascript
console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false
```
> **Key Point:** Avoid using `null` and `undefined` in comparisons to prevent unexpected results.

## Strict vs Loose Equality
- **Strict Equality (===):** Compares both value and type.
- **Loose Equality (==):** Converts values to the same type before comparing.
```javascript
console.log("2" === 2);  // false (different types)
console.log("2" == 2);   // true  (type coercion happens)
```

## Additional Logical Examples
```javascript
console.log(true == 1);   // true (true is converted to 1)
console.log(false == 0);  // true (false is converted to 0)
console.log("" == 0);     // true (empty string is converted to 0)
console.log([] == 0);     // true (empty array is converted to 0)
console.log([] == "");   // true (empty array is converted to empty string)
console.log([1] == 1);    // true (array with single number is converted to number)
```

> **Best Practice:** Use strict equality (`===`) whenever possible to avoid unexpected type coercion.

## Conclusion
1. Avoid mixed-type comparisons.
2. Use strict equality (`===`) to prevent implicit type conversion.
3. Understand `null` and `undefined` behavior to avoid logic errors.

Happy coding! 🎉

