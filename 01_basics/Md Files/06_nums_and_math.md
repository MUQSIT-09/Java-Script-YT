# JavaScript Numbers and Math Methods

## Numbers in JavaScript
JavaScript automatically detects numbers when assigned to a variable:
```javascript
const score = 400;
console.log(score); // 400
```

You can explicitly define a number using the `Number` object:
```javascript
const balance = new Number(100);
console.log(balance); // [Number: 100]
```

### Useful Number Methods
1. **toString()**: Converts a number into a string.
   ```javascript
   console.log(balance.toString()); // "100"
   console.log(balance.toString().length); // 3
   ```
2. **toFixed()**: Rounds the number to a fixed number of decimal places.
   ```javascript
   console.log(balance.toFixed(1)); // "100.0"
   ```
   - Use cases: Calculating GST, displaying prices on e-commerce websites.

3. **toPrecision()**: Formats the number to a specified length.
   ```javascript
   const otherNumber = 124.8966;
   console.log(otherNumber.toPrecision(3)); // "125"
   ```
   - Exponential notation if the number is too large:
     ```javascript
     const bigNumber = 1123.8966;
     console.log(bigNumber.toPrecision(3)); // "1.12e+3"
     ```

4. **toLocaleString()**: Formats numbers according to locale standards.
   ```javascript
   const hundreds = 1000000;
   console.log(hundreds.toLocaleString('en-IN')); // "10,00,000"
   ```

5. **Other Number Properties**:
   ```javascript
   Number.MAX_VALUE; // Largest possible number
   Number.MIN_VALUE; // Smallest possible number
   Number.MAX_SAFE_INTEGER; // Largest safe integer
   Number.MIN_SAFE_INTEGER; // Smallest safe integer
   ```

## Math in JavaScript
`Math` is a built-in object that provides mathematical functions and constants.
```javascript
console.log(Math); // Object [Math] {}
```

### Common Math Methods
1. **abs()**: Returns the absolute value.
   ```javascript
   console.log(Math.abs(-4)); // 4
   ```
2. **round()**: Rounds to the nearest integer.
   ```javascript
   console.log(Math.round(4.3)); // 4
   console.log(Math.round(4.6)); // 5
   ```
3. **ceil()**: Rounds up to the nearest integer.
   ```javascript
   console.log(Math.ceil(4.2)); // 5
   ```
4. **floor()**: Rounds down to the nearest integer.
   ```javascript
   console.log(Math.floor(4.9)); // 4
   ```
5. **min() and max()**: Find minimum and maximum values.
   ```javascript
   console.log(Math.min(4, 3, 6, 8)); // 3
   console.log(Math.max(4, 3, 6, 8)); // 8
   ```
6. **random()**: Generates a random number between 0 (inclusive) and 1 (exclusive).
   ```javascript
   console.log(Math.random()); // 0.123456789 (varies)
   ```
   - Random number between 1 and 10:
     ```javascript
     console.log(Math.floor(Math.random() * 10) + 1);
     ```
   - Random number in a custom range:
     ```javascript
     const min = 10;
     const max = 20;
     console.log(Math.floor(Math.random() * (max - min + 1)) + min);
     ```

### OTP Generator Example:
```javascript
function generateOtp() {
    let min = 100000;
    let max = 999999;
    console.log(Math.floor(Math.random() * (max - min + 1) + min));
}
generateOtp(); // Generates a 6-digit OTP
```

These methods are super handy for handling numerical operations and generating random values in JavaScript. 🚀

