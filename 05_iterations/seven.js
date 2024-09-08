// Map is preffered more compared to foreach(personal opinion).
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

// Using two map at a time:
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

// output:
// [
//     41, 51,  61, 71,
//     81, 91, 101
// ]

// Real Life Example:
// Imagine you have a bunch of toys in a basket, and you want to do different things with them:

//  Map: Imagine you want to paint each toy in the basket with a bright color. To do this, you would take one toy at a time, 
//  paint it, and put it back in the basket. Map works similarly.
//  It takes a function and applies it to each toy in the basket, creating a new basket with the transformed toys.
//  So, map transforms each toy without changing their order or number.