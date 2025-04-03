// Js Objects  ==> Math, Date
// Math is the Object in JavaScript which provides various Capabilities/Functionality:

console.log(Math.PI);                   // 3.141592653589793

console.log(Math.max(64,31,95));        // 95

console.log(Math.min(64,31,95));        // 31

console.log(Math.round(1.1));           // 1

console.log(Math.floor(1.3));           // 1

console.log(Math.ceil(2.1));            // 3

console.log(Math.abs(-64));             // 64

console.log(Math.random());             // 0.3774100780204608

console.log(Math.sqrt(5));              // 2.23606797749979

console.log(Math.pow(2,10));            // 1024


// Date

let curr = new Date()
console.log(curr);          // 2025-04-03T06:01:21.989Z

let date = new Date('sep 9 2004 06:18')
console.log(date);          // 2004-09-09T06:18:00.000Z

let newdate = new Date(2002,5,4,8)
console.log(newdate);       // 2002-06-04T08:00:00.000Z
console.log(newdate.getFullYear());  // 2002

// Setting the year

console.log(newdate.setFullYear(2004));  // 2002
console.log(newdate);     // 2004-06-04T08:00:00.000Z








