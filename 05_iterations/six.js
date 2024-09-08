//Filter function is used to display/retrive those particular objects/array information which comes under the given condition.  
const coding = ["js", "ruby", "java", "python", "cpp"]

//Foreach loop doesn't return any value.
const values = coding.forEach( (item) => {
    console.log(item);
    return item // undefined
} )

console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// if you use scope{} then we must and should have return keyword. 
const newNums = myNums.filter( (num) => {
    return num > 4
} )

// const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
//   output:
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     }
//   ]

// Real Life Example:
// Imagine you have a bunch of toys in a basket, and you want to do different things with them:

// Filter: Now, let's say you only want to keep the toys that are soft. 
// You would go through each toy, feel its texture, and keep only the soft ones in the basket. 
// Filter works in a similar way. It takes a function that checks a condition and applies it to each toy.
// It creates a new basket containing only the toys that satisfy the condition.
// So, filter helps you select and keep only specific toys based on a condition.