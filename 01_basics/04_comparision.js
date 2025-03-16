// Basic Comparisons
console.log(2 > 1);    // true
console.log(2 >= 1);   // true
console.log(2 < 1);    // false
console.log(2 == 1);   // false
console.log(2 != 1);   // true

// String and Number Comparison
// JavaScript converts strings to numbers when using comparison operators.

console.log("2" > 1);     // true    --> The string "2" is converted to the number 2.
console.log("02" > 1);    // true    --> leading zeros are ignored in numeric conversion

// --> Avoid this type of the comparision and equaity operations write clean code

// Null Comparison

// Here Null is sometimes converted into Nan or 0 depends on the compiler
// In JavaScript, comparison operators (>, >=, etc.) convert null to 0:
console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

// Undefined Comparison

// Equality (==): undefined == 0 is false because undefined only equals null with loose equality, not 0.
// Comparisons (>, <): undefined is converted to NaN in numeric comparisons, and any comparison with NaN is always false.

console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false

// Strict vs Loose Equality

// === values and data types both are checked here. which is known as strict equality 
// Strict Equality (===): Compares both value and type.
// Loose Equality (==): Converts values to the same type before comparing.

console.log("2" === 2);  // false (different types)
console.log("2" == 2);   // true  (type coercion happens)

// Additional Logical Examples

console.log(true == 1);   // true (true is converted to 1)
console.log(false == 0);  // true (false is converted to 0)
console.log("" == 0);     // true (empty string is converted to 0)
console.log([] == 0);     // true (empty array is converted to 0)
console.log([] == "");   // true (empty array is converted to empty string)
console.log([1] == 1);    // true (array with single number is converted to number)