// Call in JS:
// Call --> Is a method that allows you to call a function with a specific this context and optional arguments.
//  It enables you to explicitly define what the this keyword refers to within a function.
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // This is only the refernce of the function which will not get called.
    SetUsername(username)
    // output doesn't conatins username, o/p : called, createUser { email: 'chai@fb.com', password: '123' }
    // This "this" is send as parameter to that call function and replaces with the new username present in function.
    //  call is given explictely here.
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}
const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);


// ----------------------------------------------Summarry ---------------------------------------------------//
/* 
1.SetUsername function: This function sets the username property of an object and prints "called" to the console.

2.createUser function: It uses SetUsername.call(this, username) to call the SetUsername function 
in the context of the current object (i.e., this), ensuring that this.username is set to the given username.
It also assigns the provided email and password to the current object.

3.Object Creation: When new createUser("chai", "chai@fb.com", "123") is called:
A new object is created.
The SetUsername function is invoked with this new object as this, so this.username = "chai".
The email and password properties are also set on the new object. */


//  Another Example:
function greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
  
  const person = {
    name: "Alice"
  };
  
  greet.call(person);  // Output: Hello, my name is Alice

//  greet.call(person) calls the greet function with person as its this, 
//  so this.name inside greet refers to person.name.