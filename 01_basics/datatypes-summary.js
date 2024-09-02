//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// Here id === anotherId is false,they = are not same if there value are also same that is the speciality of symbol.
console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Azad",
    age: 52,
}
// inside { } what ever is prsent they are objects. 
const myFunction = function(){
    console.log("Hello world");
}

// typeof gives the datatype of teh variables
console.log(typeof anotherId);

// Link for data type conversion 
// https://262.ecma-international.org/5.1/#sec-11.4.3


/* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object (known as function object)
       Function  =>  function (known as object function)
       Object  =>  object

*/