// High Order Array loops 
// for of:

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num); // 1 2 3 4 5
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// Map are unique and stored in a particular order only.
console.log(map); // --? o/p : Map(3) { 'IN' => 'India', 'USA' => 'United States of America','Fr' => 'France' }

// Here we get the o/p in the form of array:
for (const key of map) {
    console.log(key); // [IN :- India] ,[ USA :- United States of America] ,[Fr :- France]
}

for (const [key, value] of map) {
    console.log(key, ':-', value); //IN :- India , USA :- United States of America ,Fr :- France
}

// can't be iterable for objects like this.
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); //TypeError: myObject is not iterable
    
// }