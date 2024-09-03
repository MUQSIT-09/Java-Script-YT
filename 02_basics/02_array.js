const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);  // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// The dc_heros becomes an difefrent array with in teh marvwl_heros array becomes of a 2d Array
console.log(marvel_heros[3][1]);  // flash

const allHeros = marvel_heros.concat(dc_heros) 
// console.log(allHeros); // ['thor','Ironman','spiderman',[ 'superman', 'flash', 'batman' ],'superman','flash','batman']

// Spread operation : remember the example of glass breaking in the floor 
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros); //  ['thor','Ironman','spiderman',[ 'superman', 'flash', 'batman' ],'superman','flash','batman']

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// Flat will make all the elements in one array
const real_another_array = another_array.flat(Infinity) 
console.log(real_another_array); //  [1, 2, 3, 4, 5,6, 7, 6, 7, 4, 5]

// Array.isArray Methods check whtether it is present or not.
console.log(Array.isArray("Hitesh")) // false
console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting

// anme returns [] list as it is a key  , value returns teh array elements.

let score1 = 100
let score2 = 200
let score3 = 300

// Combines all the elements in one array.
console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]

// Concat All method:
const Array1 = [1,2,3,4,5];
const Array2 = [5,6,7,8,9,10];
const Array3 = [0,0,0];
const Array4 = [1,3,9,19];
const concatAll = Array1.concat(Array2, Array3,Array4)
console.log(concatAll) // [1, 2, 3,  4, 5, 5, 6, 7, 8, 9, 10, 0, 0, 0, 1, 3, 9, 19]

