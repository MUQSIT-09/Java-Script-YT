const name = "Subsitute"
const repoCount = 50
// Strings are not array they are like key,value pairs.

// This is old method in modern day use backticks
// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Best Practice:(Modern Day)
// Use String Interpolation for concatenating.
let rating = 'one'
`Chai aur code is number ${rating} channel` // Chai aur code is number one channel

const gameName = new String('Subway-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

// slice will work in negative indexes also
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   spaces    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/leni%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('okay'))

console.log(gameName.split('-'));
// also splitstart, splitend are the methods


//String interpolation

// Old way:
// Let a = name
// Let b = age
// let a = prompt("What is your name");
//       let b = prompt("What is your age");
//       document.write("My name is " + a + "and i am " + b + "years old")


// New way:
// let a = prompt("What is your name");
//       let b = prompt("What is your age");
//       document.write(`Hello my name is ${a} and I'm ${b} years old `);

// We use ` ` to write complete string and will use ${} to inject variables in it.