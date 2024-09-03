// Arrays Basic Introduction:

// SUMMARRY:

// 1. Array is written in brackets [  ].
// 2. Array data type is an object.
// 3. Array can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive (refrence) type.
// 6. When array copy operations is performed it copies in shallow copies
// 7. Shallow copies = have same refernce point, so taht's why the original array gets changed 
// 8. Deep copies = don't share the refrence
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["Leni", "Lingi","Unaa","Lennate","Lenoide"]

console.log(myHeors); //[ 'Leni', 'Lingi', 'Unaa', 'Lennate', 'Lenoide' ]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]); // 1

// Array methods

// 1.Push = adds value to last of an array.
myArr.push(6)
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6]

myArr.push(7)
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6, 7]

// 2. Pop = removes last value of an array.
myArr.pop()
console.log(myArr); //[ 0, 1, 2, 3, 4 ]

// 3. Unshift = adds value at first of an array.
myArr.unshift(64)
console.log(myArr); // [64, 0, 1, 2, 3, 4, 5]

// 4.Shift = removes first value of an array.
myArr.shift()
console.log(myArr); //[ 1, 2, 3, 4, 5 ]

// 5. Includes = checks true or false.
console.log(myArr.includes(9)); //false

// 6. IndexOf = checks the position of value in number form.
console.log(myArr.indexOf(3)); //3

// 7.Join = converts to string.
const newArr = myArr.join()

console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
console.log( newArr); // 0,1,2,3,4,5 --> Values are same but the array is converted into string with the help of join method


// 8. Slice(value to remove from,value remove upto but don't include) = returns new array and original value remains unchanged. 
// Use when you need to extract a portion of an array without modifying it.

console.log("A ", myArr); //A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1); //[ 1, 2 ]
console.log("B ", myArr); //B  [ 0, 1, 2, 3, 4, 5 ]

// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.
// Use when you need to add, remove, or replace elements within an array.
console.log("A ", myArr); //A  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); //C  [ 0, 4, 5 ] --> here teh original array gets changed while performing splice thats' teh main diff b/w slice and splice
console.log(myn2); //[ 1, 2, 3 ]

