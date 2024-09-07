Summary :

//  THIS and arrow function in javascript 

// this keyword is used to get the current context.

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // hitesh , welcome to website
        console.log(this);     // { username: 'hitesh', price: 999, welcomeMessage: [Function: welcomeMessage] }
    }

}

user.welcomeMessage()

// changing the context by keeping the username as sam
user.username = "sam" // sam , welcome to website
user.welcomeMessage()  // { username: 'sam', price: 999, welcomeMessage: [Function: welcomeMessage] }

console.log(this); // 0/p --> {} if you are in node environment.

// *** if you are using in browser then we will get global object: like windows.


// Inside the function we can't access the current context 
function chai(){
    let username = "hitesh"
    console.log(this.username);// undefined
}

chai()


// Declaring the function with const.
const chai = function () {
    let username = "hitesh"
    console.log(this.username); //undefined
}

// declaring the arrow function and if you use this inside it then we will get {} in output 
const chai =  () => {
    let username = "hitesh"
    console.log(this); // {}
}


chai()

// Another way using parameters:
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4)) //7

// Implicit return - No need to have paranthesis, remove return keyword also , it's same in react also.
const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) => ( num1 + num2 ) // 7

// returning an object:

const addTwo = (num1, num2) => {username: "hitesh"} //undefined

// returning an object: it should we wrapped in paranthesis only.
const addTwo = (num1, num2) => ({username: "hitesh"}) //{ username: 'hitesh' }


console.log(addTwo(3, 4)) // 7

// Arrow Function is also used in Loops 

const myArray = [2, 5, 3, 7, 8]

myArray.forEach()