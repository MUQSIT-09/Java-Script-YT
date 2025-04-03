// Complie Time Error

// While parsing of the program this error is obtained

// Syntax error
// console.log(1;

// Run-Time Error:
// while the time of Execution this error is obtained

// ReferenceError
console.log(x);   // ReferenceError: x is not defined

// Handling the Error

// We Use try-catch

// try contains the code where the error can be expected to be occured
// catch will handlle that error and doesn't interupt the flow of program execution. by defining what we want to do with the error
// Finally will always get executed irrespective of whether the error is occured or not.

try {
    console.log("This the Try block Start");
    console.log(x);
    console.log("This the Try block End");
} catch (error) {
    // Define , what we want to do with the error
    // Ex: Retry logic, fallback mechanism
    console.log("I a inside the catch block");
    console.log(error);
}
finally{
    console.log("I will always get executed irrespective of whether the error is occured or not")
}

// Output

// This the Try block Start
// I a inside the catch block
// ERROR!
// ReferenceError: x is not defined
//     at Object.<anonymous> (/tmp/fVc1g4Yk9Z/main.js:4:17)
//     at Module._compile (node:internal/modules/cjs/loader:1554:14)
//     at Object..js (node:internal/modules/cjs/loader:1706:10)
//     at Module.load (node:internal/modules/cjs/loader:1289:32)
//     at Function._load (node:internal/modules/cjs/loader:1108:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
//     at node:internal/main/run_main_module:36:49
// I will always get executed irrespective of the error is occured or not


// If we want to throw the error from our side (like custom error):
// Then we use throw keyword for custom error
// Mostly used in givernment eway bill api error 
// https://docs.ewaybillgst.gov.in/apidocs/api-error-codes-list.html


// Creating a custom error:

try {
    // ReferenceError: x is not defined
    console.log(x);
} catch (error) {
    throw new Error("Brother first declare then print it.");
}

// Output

// ERROR!
// /tmp/amO8iOgMch/main.js:5
//     throw new Error("Brother first declare then print it.");
//     ^

// Error: Brother first declare then print it.
//     at Object.<anonymous> (/tmp/amO8iOgMch/main.js:5:11)
//     at Module._compile (node:internal/modules/cjs/loader:1554:14)
//     at Object..js (node:internal/modules/cjs/loader:1706:10)
//     at Module.load (node:internal/modules/cjs/loader:1289:32)
//     at Function._load (node:internal/modules/cjs/loader:1108:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
//     at node:internal/main/run_main_module:36:49

let errorcode = 101;
if(errorcode === 101){
    throw new Error("Invalid Username");
}

// Output:

// ERROR!
// /tmp/1p6eEyMcIX/main.js:3
//     throw new Error("Invalid Username");
//     ^

// Error: Invalid Username
//     at Object.<anonymous> (/tmp/1p6eEyMcIX/main.js:3:11)
//     at Module._compile (node:internal/modules/cjs/loader:1554:14)
//     at Object..js (node:internal/modules/cjs/loader:1706:10)
//     at Module.load (node:internal/modules/cjs/loader:1289:32)
//     at Function._load (node:internal/modules/cjs/loader:1108:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
//     at node:internal/main/run_main_module:36:49