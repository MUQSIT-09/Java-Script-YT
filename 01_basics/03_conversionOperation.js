let score = "hitesh"

console.log(typeof score);   // 0/p --> string
console.log(typeof(score));  // 0/p --> string

let valueInNumber = Number(score)

console.log(typeof valueInNumber);  // o/p --> number
console.log(valueInNumber);         // o/p --> NaN


// "33" => 33
// "33abc" => NaN
// Undefined => NaN
// null => 0
// true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);       // o/p --> true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);           // o/p --> 33
console.log(typeof stringNumber);    // o/p --> string


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);   // -3

console.log(2+2);     // 4
console.log(2-2);     // 0
console.log(2*2);     // 4
console.log(2**3);    // 8
console.log(2/3);     // 0.6666666666666666
console.log(2%3);     // 2

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);        // hello hitesh

console.log("1" + 2);     // 12
console.log(1 + "2");     // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log( (3 + 4) * 5 % 3); // 2

console.log(+true);  
// 1 we will get the output  because (Unary + converts true to 1)
console.log(+"");
// 0 we will get the output  because (Unary + converts empty string to 0)


let num1, num2, num3
num1 = num2 = num3 = 2 + 2

console.log(typeof num1);  // o/p --> number
console.log(num1);         // o/p --> 4

let gameCounter = 100
++gameCounter;
console.log(gameCounter);  //101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion