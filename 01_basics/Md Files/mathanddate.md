# JavaScript Objects: Math and Date

## Math Object
The `Math` object in JavaScript provides various mathematical functionalities and constants.

### Commonly Used Math Methods:

- `Math.PI` → Returns the value of π (3.141592653589793).
- `Math.max(a, b, c, ...)` → Returns the maximum value among given numbers.
- `Math.min(a, b, c, ...)` → Returns the minimum value among given numbers.
- `Math.round(x)` → Rounds `x` to the nearest integer.
- `Math.floor(x)` → Rounds `x` down to the nearest integer.
- `Math.ceil(x)` → Rounds `x` up to the nearest integer.
- `Math.abs(x)` → Returns the absolute value of `x`.
- `Math.random()` → Generates a random floating-point number between `0` and `1`.
- `Math.sqrt(x)` → Returns the square root of `x`.
- `Math.pow(base, exponent)` → Computes `base` raised to the power of `exponent`.

```js
console.log(Math.PI);                   // 3.141592653589793
console.log(Math.max(64,31,95));        // 95
console.log(Math.min(64,31,95));        // 31
console.log(Math.round(1.1));           // 1
console.log(Math.floor(1.3));           // 1
console.log(Math.ceil(2.1));            // 3
console.log(Math.abs(-64));             // 64
console.log(Math.random());             // Random number (0 to 1)
console.log(Math.sqrt(5));              // 2.23606797749979
console.log(Math.pow(2,10));            // 1024
```

## Date Object
The `Date` object in JavaScript is used to work with dates and times.

### Creating Date Instances:

- `new Date()` → Returns the current date and time.
- `new Date(dateString)` → Creates a date from a string.
- `new Date(year, month, day, hours, minutes, seconds, milliseconds)` → Creates a date with specific values.

```js
let curr = new Date();
console.log(curr);          // Current date and time

let date = new Date('Sep 9 2004 06:18');
console.log(date);          // 2004-09-09T06:18:00.000Z

let newdate = new Date(2002,5,4,8); // June 4, 2002, at 08:00
console.log(newdate);  // 2002-06-04T08:00:00.000Z
console.log(newdate.getFullYear());  // 2002
```

### Modifying Date:

- `setFullYear(year)` → Updates the year of the date instance.

```js
console.log(newdate.setFullYear(2004));  // Changes year to 2004
console.log(newdate);     // 2004-06-04T08:00:00.000Z
