function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));         // o/p ---> 25
console.log(multipleBy5.power);      // o/p ---> 2
console.log(multipleBy5.prototype);  // o/p ---> {}

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

/*As we are storing the function createuser into const chai then some additional things are added into it ,
  for that we need new instance then we can use New keyword, so that the functions which are invoked they are add.
*/ 
const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

// If you don't use new then the below code gives an error.
chai.printMe()     // o/p ---> price is 25


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
 This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: 
The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, 
to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/



// Summary:

/*`. this keyword in javascript refers to the current context of who is calling . matlab this boleto jisne bulaya . 
example: if you say  | "hemant   ".trueLength() | then how will the trueLength() method knows that on whom it have to perform . 
so we use this in the trueLength() function definition so it will automatically take the context of by whom the method is callled , boleto jisne bulaya uska kaam hoga.....
*/