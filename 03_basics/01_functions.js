// //Functions in Js:
// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName() //function define


// // function addTwoNumbers(number1, number2){ // consists of parameters

// //     console.log(number1 + number2); // if return statement not given the resukt value is not stored
// // }
// //   const result = addTwoNumbers(3, 5) // Here 3,5 are arguments 

// //   console.log("Result: ", result); // o/p ---> 8 , Result:  undefined

// //   addTwoNumbers()//function define
// //   addTwoNumbers(5,6)//function call , consists of arguments
// function addTwoNumbers(number1, number2){
    
//     let result = number1 + number2
//     return result
//     return number1 + number2 // can't execute anything after return.
// }

// const result = addTwoNumbers(3, 5) // Here 3,5 are arguments 

// console.log("Result: ", result); // o/p----> Result: 8


// function loginUserMessage(username = "sam"){ // Give the deafult value as sam. ifa ny other value comes it ovrwrite sam.
//     if(!username){ // or if(username === undifined ) ---> inside if null,undifined are false always.
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
//     // After return statement nothing gets executed.
// }
// loginUserMessage("Shah")    // Thsi will execute the finction but would not print anything as it is not having console statement.
// console.log(loginUserMessage(""))       // o/p --> just logged in (empty string when given) without if statement
// console.log(loginUserMessage(null))     // o/p -----> undefined just logged in. if default value is not given.
// console.log(loginUserMessage(null))     // o/p -----> null just logged in. if default value is not given.
// console.log(loginUserMessage("Azam"))   // o/p ---> Azam just logged in




// ++++++++++++++++++++++++++++++++++++++++++++++

// ...num1 is a rest operator same as spread operator only
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))  //[ 500, 2000 ]

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); //Username is sam and price is 399
}
// if price is given instead of prices
// handleObject(user)
// without defining object directly
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){ //you can taje any name over here as your parameters.
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));