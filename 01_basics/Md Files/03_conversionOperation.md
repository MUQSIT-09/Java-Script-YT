# JavaScript Type Conversion and Operations

## Type Conversion
```javascript
let score = "hitesh";
console.log(typeof score); // "string"

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // "number"
console.log(valueInNumber); // NaN

// "33" => 33
// "33abc" => NaN
// undefined => NaN
// null => 0
// true => 1, false => 0

let isLoggedIn = "hitesh";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

// 1 => true, 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // "string"
```

## Operations

### 1. Arithmetic Operations
#### Unary and Primary Operators:
```javascript
let value = 3;
let negValue = -value;
console.log(negValue); // -3
```

#### Basic Arithmetic:
```javascript
console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 ** 3); // 8
console.log(2 / 3); // 0.666...
console.log(2 % 3); // 2
```

### 2. Assignment Operations
```javascript
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1, num2, num3); // 4 4 4
```

### 3. Logical Operations (Short-circuiting)
```javascript
console.log(true || false); // true (short-circuits, doesn't check the second operand)
console.log(false && true); // false (short-circuits, doesn't check the second operand)
console.log(true && false); // false
console.log(false || "default"); // "default"
```

### 4. Bitwise Operations
```javascript
console.log(5 & 1); // 1 (AND)
console.log(5 | 1); // 5 (OR)
console.log(5 ^ 1); // 4 (XOR)
console.log(~0); // -1 (Bitwise NOT: flips all bits, 0 becomes -1)

// Left and Right Shift
console.log(5 << 1); // 10 (Left shift: 5 * 2^1)
console.log(5 >> 1); // 2 (Right shift: 5 / 2^1)
console.log(-5 >> 1); // -3 (Right shift with negative numbers)
console.log(5 >>> 1); // 2 (Unsigned right shift: fills left with zeros)
```

### 5. Ternary Operation
```javascript
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"
```

### 6. Comparison Operations
```javascript
console.log(2 == "2"); // true (loose equality)
console.log(2 === "2"); // false (strict equality)
console.log(2 != "3"); // true
console.log(2 !== "2"); // true
```

## Game Counter Example
```javascript
let gameCounter = 100;
++gameCounter;
console.log(gameCounter); // 101
```

## Useful Links
[ECMAScript Specification: Type Conversion](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion)

