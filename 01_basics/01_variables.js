const acoountid=64312
let acoountemail="javascript@gmail.com"
var accountpass="2748"
accountCity = "Hyderabad"
let accountstate;
// as accountsatte is not intialized it will be undefined.
// accountId = 2 // not allowed to change var when once it is declared ,
// avoid using var as it gives global scope in functions or between braces {} in if,else conditions

acoountemail = "hdfc@gmail.com"
accountpass = "4352"
accountCity = "Kishanganj"
// for accountcity not given any variable but it will get a memeory by js to store which is not a good practice
console.log(accountstate);

// can print all together in table format using console.table([]);

console.table([acoountid , accountpass , accountstate, accountCity]);

