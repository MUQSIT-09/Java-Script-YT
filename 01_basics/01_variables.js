// Variables in Java Script

// Var is Function-scoped,global-scope,but not block scoped and var can be redeclared and updated.
// Due to these var drawbacks let and const was introduced in 2015 which made debugging more easier.

// Let is Block-scoped, can be updated but not redeclared
// Block-scoped means the scope of the variables is within the braces/{} only, it can not be accessble before and after the braces.
// For Better Understanding Lets See The Example:

// console.log(phu);    // o/p --->  ReferenceError: phu is not defined
// {
//     let lingi=31;
//     let phu=3;
// } 
// console.log(lingi);  // o/p --->  ReferenceError: lingi is not defined 

// const is Block-scoped, cannot be updated or redeclared.
// If we try to update then we will get error.

// Which variable we should use:
// Use const by default, and switch to let if you need to reassign; avoid var due to its function scope and hoisting issues.

const accountid=64312
accountid=3
console.log(accountid); // o/p --> TypeError: Assignment to constant variable.

let acoountemail="javascript@gmail.com"
var accountpass="2748"
accountCity = "Hyderabad"
let accountstate;

// as accountstate is not intialized it will be undefined.
// accountId = 2 // not allowed to change var when once it is declared ,
// avoid using var as it gives global scope in functions or between braces {} in if,else conditions

acoountemail = "hdfc@gmail.com"
accountpass = "4352"
accountCity = "Kishanganj"

// For accountcity not given any variable but it will get a memeory by js to store which is not a good practice

console.log(accountCity);   //  Kishanganj Will be printed in when you use in node in other online compiler it will be ReferenceError: accountcity is not defined
console.log(accountstate);  //  undefined

// We can print all together in table format using console.table([]);

console.table([accountid , accountpass , accountstate, accountCity]);

// --> Output:
// ┌─────────┬──────────────┐
// │ (index) │ Values       │
// ├─────────┼──────────────┤
// │ 0       │ 64312        │
// │ 1       │ '4352'       │
// │ 2       │ undefined    │
// │ 3       │ 'Kishanganj' │
// └─────────┴──────────────┘

// Variable Naming Conventions:
// 1. Can starte with $,_,number 
// 2. There should be no space between teh variable ex:shiv linga
// 3. It should be in CamelCase Convention
// Example for camelcase convention => marksofstudents 
// In camelcase ==> marksOfStudents --> the fiest word should be in lower case and then the other words starteing letter should be in uppercase.
// 4. The variable should be meaningfull
// 5. It should not be a reserved word of the javascript language

