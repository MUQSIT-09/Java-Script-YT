# JavaScript Array Methods

## Merging and Flattening Arrays

```javascript
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);
console.log(marvel_heros);  // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// Accessing elements inside the nested array
console.log(marvel_heros[3][1]);  // flash

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // ['thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ], 'superman', 'flash', 'batman']

// Spread operation: useful for merging arrays
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); 
```

## Flattening Arrays

```javascript
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flattening the array to a single level
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
```

## Checking and Creating Arrays

```javascript
// Checking if a value is an array
console.log(Array.isArray("Hitesh")); // false
console.log(Array.from("Hitesh")); // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})); // interesting case, returns an empty array

// Creating an array from values
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
```

## Concatenating Multiple Arrays:

```javascript
const Array1 = [1,2,3,4,5];
const Array2 = [5,6,7,8,9,10];
const Array3 = [0,0,0];
const Array4 = [1,3,9,19];
const concatAll = Array1.concat(Array2, Array3, Array4);
console.log(concatAll); // [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 0, 0, 0, 1, 3, 9, 19]
```
