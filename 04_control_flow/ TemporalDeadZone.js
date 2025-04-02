// Variable Scoping And TemporalDeadZone


// Variable Scoping:
//    1) global
//    2) function
//    3) block

// Global Scope

// The variable can we accessed anywhere in the document liek inside if,loop,function etc:

let a = 10
const b = 10
var c = 10
console.log(a);  // 10
console.log(b);  // 10
console.log(c);  // 10

for(let i=0;i<3;i++){
    console.log("1 Loop:",a);  // 1 Loop: 10  
    console.log("2 Loop:",b);  // 2 Loop: 10
    console.log("3 Loop:",c);  // 3 Loop: 10
}

function sayhello() {
    console.log("1 function:",a); // 1 function: 10
    console.log("2 function:",b); // 2 function: 10
    console.log("3 function:",c); // 3 function: 10
}
sayhello();

if(true){
    console.log("1 Loop:",a);  // 1 Loop: 10  
    console.log("2 Loop:",b);  // 2 Loop: 10  
    console.log("3 Loop:",c);  // 3 Loop: 10  
}

{
    console.log("1 Loop:",a);  // 1 Loop: 10  
    console.log("2 Loop:",b);  // 2 Loop: 10  
    console.log("3 Loop:",c);  // 3 Loop: 10  
}


// Function Scope

function lingi() {
    var fullname="Linga"
    console.log(fullname);  // Linga
    let halfname="Lingi"
    console.log(halfname);  // Lingi
    const surname="Stark"
    console.log(surname);   // Stark
}
console.log(fullname); // ReferenceError : fullname not defined
console.log(halfname); // ReferenceError : halfname not defined
console.log(surname);  // ReferenceError : surname not defined
lingi();


// Block Scope 

// Var is not block scope it is always global 

console.log(size);  // Undefined
{
    var size = 6;
}
console.log(size);  // 6

{
    let age = 6;
}
console.log(age);   // ReferenceError: age is not defined


{
    const age = 6;
}
console.log(age);   // ReferenceError: age is not defined


//  TemporalDeadZone

// let and const do not have the hoisting so if we try to access them before intialization it goes under TemporalDeadZone

// In the below code from marks to lanisters printing statements all are in TemporalDeadZone.

console.log(marks);        // ReferenceError: marks is not defined
console.log("Starks"); 
let me = 6;                // Doesn't gets intialized as it is inside TemporalDeadZone.
console.log("Lanisters");
marks = 64;
console.log(marks);
console.log(me);





