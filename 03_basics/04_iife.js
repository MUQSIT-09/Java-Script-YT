// Immediately Invoked Function Expressions (IIFE)

// IIFE = the secret sauce for encapsulating code and maintaining a clean global scope.
// They can enhance code organization, protect variables, and prevent naming collisions.
//  It used for imediate invokation of function, we don't want pollution from global scope at all.
// used --> while some time we want to coonect our DB and get that message.
// ()() --> 1.() => For function defination, 2.() => For function call.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`); // DB CONNECTED
})();

// If you don't keep ";" Then this will give an error and the next function will not be executed.
//  Unnamed/simple IIFE with parameters and arguments 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`); //DB CONNECTED TWO Krishnakunj
} )('Krishnakunj')
