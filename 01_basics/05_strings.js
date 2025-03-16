const name = "Subsitute"
const repoCount = 50
// Strings are not array they are like key,value pairs.

// This is old method in modern day use backticks
// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Hello my name is Subsitute and my repo count is 50

// Best Practice:(Modern Day)
// Use String Interpolation for concatenating.
// let rating = 'one'
// `Chai aur code is number ${rating} channel` // Chai aur code is number one channel

const gameName = new String('Subway-hc-com')

console.log(gameName[0]);   // S
console.log(gameName.__proto__);  //{}  because it only displays enumerable properties by default — but String.prototype methods (like toUpperCase) are non-enumerable, 
// so the console looks empty, even though the prototype contains many methods.
// .__proto__ It is a reference to the prototype of an object. 

console.log(gameName.length);  // 13
console.log(gameName.toUpperCase());  // SUBWAY-HC-COM

console.log(gameName.charAt(2));    // b
console.log(gameName.indexOf('t')); // -1

const newString = gameName.substring(0, 4)
console.log(newString);   // Subw

// slice will work in negative indexes also
const anotherString = gameName.slice(-8, 4)  
const anotherString1 = gameName.slice(2, 4)  // bw
console.log(anotherString1);

const newStringOne = "   spaces    "
console.log(newStringOne);         //    spaces    
console.log(newStringOne.trim());  //spaces    

const url = "https://hitesh.com/leni%20choudhary"

console.log(url.replace('%20', '-'))  // https://hitesh.com/leni-choudhary

console.log(url.includes('okay'))    // false

console.log(gameName.split('-'));  // [ 'Subway', 'hc', 'com' ]
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