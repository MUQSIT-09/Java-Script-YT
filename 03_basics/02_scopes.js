// Scope of var.let,const

// 1. const : once it is created and intialzed it will not be changed.
// 2. var,let   : var,let value will be changed if you want.
// 3. All there variables inside teh function and outside is global.
// 4. But if you create a var inside if/while/else/elseif... then var becomes global and the value gets changed as mentioned below value will get 3.

//  *** Avoid using var, you can prefer const and let, most preferred let as it can be changed in some cases when needed. *** 
var c = 300
let a = 365
const b = 2

// ----> In case if/else/elseif...... the scope becomes block/local scope

if (true) {
    let a = 10
    const b = 20
    // b=2 // it will not change and gives an error --->TypeError: Assignment to constant variable. 
    console.log("Block of B ",b) // 20 --> const b once is updated in block scope but if you try again to change it will not as it is const datatype.
    console.log("INNER: ", a); // 10  --> here a becomes 
    // c=3  ---->var c is changed to 3 and become global value.
}



console.log(a);  // 365 --> even if a,b is changed inside the if it will remain it's global value which is intialized before if.
console.log(b);  // 2
console.log(c);  // 300  ----> if inside the if the c value is changed then that value(3) is printed here as it becomes global.