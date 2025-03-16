console.log(2 > 1);    // true
console.log(2 >= 1);   // true
console.log(2 < 1);    // false
console.log(2 == 1);   // false
console.log(2 != 1);   // true


console.log("2" > 1);     // true    --> The string "2" is converted to the number 2.
console.log("02" > 1);    // true    --> leading zeros are ignored in numeric conversion


// --> Avoid this type of the comparision and equaity operations write clean code


// Here Null is sometimes converted into Nan or 0 depends on the compiler
// In JavaScript, comparison operators (>, >=, etc.) convert null to 0:
console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

// Equality (==): undefined == 0 is false because undefined only equals null with loose equality, not 0.
// Comparisons (>, <): undefined is converted to NaN in numeric comparisons, and any comparison with NaN is always false.

console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false

// === values and data types both are checked here. which is known as strict equality 
// Strict equality --> ===
// Lose equality   --> ==    Only values are checked but not the datatypes

console.log("2" === 2);     // false