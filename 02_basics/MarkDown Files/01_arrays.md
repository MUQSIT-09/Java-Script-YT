# Arrays Basic Introduction:

## Summary:

1. Array is written in brackets `[]`.
2. Array data type is an object.
3. Array can contain different data types, i.e., string, number, boolean, array, etc.
4. Array is zero-based indexing. It starts with zero.
5. Once changed its original value will also change because it is a non-primitive (reference) type.
6. When array copy operations are performed, they result in shallow copies.
7. **Shallow copies** = have the same reference point, so that's why the original array gets changed.
8. **Deep copies** = don't share the reference.

```javascript
const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["Leni", "Lingi", "Unaa", "Lennate", "Lenoide"];
console.log(myHeors);  // [ 'Leni', 'Lingi', 'Unaa', 'Lennate', 'Lenoide' ]

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[1]); // 1
```

## Array Methods:

1. **Push** = adds value to the last of an array.
```javascript
myArr.push(6);
console.log(myArr);  // [0, 1, 2, 3, 4, 5, 6]
```

2. **Pop** = removes the last value of an array.
```javascript
myArr.pop();
console.log(myArr);  // [0, 1, 2, 3, 4, 5]
```

3. **Unshift** = adds value at the first of an array.
```javascript
myArr.unshift(64);
console.log(myArr);  // [64, 0, 1, 2, 3, 4, 5]
```

4. **Shift** = removes the first value of an array.
```javascript
myArr.shift();
console.log(myArr);  // [0, 1, 2, 3, 4, 5]
```

5. **Includes** = checks true or false.
```javascript
console.log(myArr.includes(9));  // false
```

6. **IndexOf** = checks the position of a value in number form.
```javascript
console.log(myArr.indexOf(3));  // 3
```

7. **Join** = converts to string.
```javascript
const newArr = myArr.join();
console.log(newArr);  // "0,1,2,3,4,5"
```

8. **Slice** = returns a new array and the original value remains unchanged.
```javascript
console.log("A", myArr);  // A [0, 1, 2, 3, 4, 5]
const myn1 = myArr.slice(1, 3);
console.log(myn1);  // [1, 2]
console.log("B", myArr);  // B [0, 1, 2, 3, 4, 5]
```

9. **Splice** = returns a new array with deleted items and changes the original array.
```javascript
console.log("A", myArr);  // A [0, 1, 2, 3, 4, 5]
const myn2 = myArr.splice(1, 3);
console.log("C", myArr);  // C [0, 4, 5]
console.log(myn2);  // [1, 2, 3]
```

### Example of Splice (Add Items):
```javascript
const fruits = ["apple", "banana", "mango"];
fruits.splice(1, 0, "orange", "grapes");  // Adds at index 1 without deleting
console.log(fruits);  // ['apple', 'orange', 'grapes', 'banana', 'mango']
```

## Additional Methods:

1. **Find** = returns the first element that satisfies the condition.
```javascript
const numbers = [10, 20, 30, 40];
const found = numbers.find(num => num > 20);
console.log(found);  // 30
```

2. **Filter** = returns a new array with elements that satisfy the condition.
```javascript
const filtered = numbers.filter(num => num > 20);
console.log(filtered);  // [30, 40]
```

3. **Reduce** = reduces the array to a single value.
```javascript
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);  // 100
```

4. **Map** = returns a new array with modified elements.
```javascript
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [20, 40, 60, 80]
```

## Favicons:

![JavaScript](https://cdn-icons-png.flaticon.com/512/919/919828.png)
![Array](https://cdn-icons-png.flaticon.com/512/1010/1010175.png)
![Methods](https://cdn-icons-png.flaticon.com/512/206/206626.png)


02_arrays

# Array Basics and Methods

### Pushing one array into another (creates a nested array)
```javascript
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros);  // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]);  // flash
```

### Concatenation - Combines arrays without nesting
```javascript
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
```

### Spread Operator - Flattens arrays one level
```javascript
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
```

### Flattening nested arrays
```javascript
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) 
console.log(real_another_array);
```

### Checking if a value is an array
```javascript
console.log(Array.isArray("Hitesh")) // false
console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // [] - Cannot convert object keys directly
```

### Array.of - Creates an array from arguments
```javascript
let score1 = 100, score2 = 200, score3 = 300
console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]
```

### Concatenating multiple arrays
```javascript
const Array1 = [1,2,3,4,5];
const Array2 = [5,6,7,8,9,10];
const Array3 = [0,0,0];
const Array4 = [1,3,9,19];
const concatAll = Array1.concat(Array2, Array3, Array4)
console.log(concatAll)
```

# Loops with Arrays

### For Each Loop - Iterates through each element
```javascript
const nums = [10, 20, 30, 40, 50]
nums.forEach((num) => console.log(num))
```

### For Of Loop - Iterates through values
```javascript
for (let num of nums) {
    console.log(num)
}
```

### For In Loop - Iterates through indices
```javascript
for (let index in nums) {
    console.log(index, nums[index])
}
```

# Using Functions with Arrays

### Function with For Each Loop
```javascript
const numbers = [1, 2, 3, 4, 5]
function printSquares(arr) {
    arr.forEach((num) => console.log(num * num))
}
printSquares(numbers) // Prints squares of each element
```

### Function with For In Loop
```javascript
function printIndices(arr) {
    for (let index in arr) {
        console.log(`Index: ${index}, Value: ${arr[index]}`)
    }
}
printIndices(numbers)
```

### Function with For Of Loop
```javascript
function printDoubles(arr) {
    for (let num of arr) {
        console.log(num * 2)
    }
}
printDoubles(numbers)
```

