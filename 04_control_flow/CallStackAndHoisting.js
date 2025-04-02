// CallStack And Hoisting

// What is Hoisting in JavaScript ?

// The behavior where variable and function declarations are moved to the top of their scope (either global or local)
//  during the compilation phase, before code execution, allowing you to use them before they are formally declared in the code

// What it is:

// Hoisting is a built-in JavaScript mechanism that makes it appear as if declarations are moved to the top of their scope. 

// How it works:

// During the compilation phase, JavaScript identifies all variable and function declarations within a scope and moves them to the top. 

// Function Hoisting:
// Function declarations are hoisted, meaning you can call a function before it's declared in the code. 

// As we expect the whole document is inside { } then the declaration of the function is send to the top of the documnet 

// Before                                                       //  After
// {                                                               {
//     function myFunction() {                                         myFunction(); // This will work as the decalaration comes to top
//         console.log("Function called!");                            function myFunction() {    
//     }                                                                  console.log("Function called!"); 
//     myFunction();                                                   }
// }                                                                   myFunction(); 
//                                                                 }                                                                }

myFunction(); // This will work
function myFunction() {
  console.log("Function called!");
}

// We should remember only the declaration comes to the top not the intialization.


// Variable Hoisting:

// Variable declarations (using var) are hoisted, but not their initializations. 
// This means you can use a variable before it's declared, but its initial value will be undefined if you try to access it before its assignment. 

console.log(myVariable); // Output: undefined  ==> as the intialization is not shfted to top only the declartion is moved.
var myVariable = "Hello";
console.log(myVariable); // Output: Hello 
