// Synchornus And Asynchronus Code:

// Synchornus Code:

// Where with the flow of the execution the code is runned it will go line-by-line.
// Ex:

console.log("Leni");
console.log("Leniode");
console.log("Lenianni");
console.log("Lenivya");

// Synchronous code runs line-by-line. Each operation waits for the previous one to complete.

// Asynchronus Code:

// Where the flow of execution is not known it can stop at any kind of position running in background.
// like waiting for an event to occur by adding an addEventListener.
// Asynchronous code doesn't wait — it lets tasks run in the background.
// Ex:

function saymyname() {
    console.log("Leniga");
}
setTimeout(saymyname,5000);

// The finction can run after/before 5ms we can't say that is an asynchronus code

// Blocking: Waiting for an event to occur and not going to next line for execution.

// Ex:
console.log("Start");
setTimeout(saymyname,5000);
// End will be waiting until the setTimeout is not executed
console.log("End");

// We can handle such cases with the help of event loop

// EventLoop:
/* Consists of 1. callstack
               2. browser
               3. callback queue
*/

// Callback queue events can only go to call stack when the call stack is empty and then there it will be exedcuted/run.

// Can use this link and understand in more better manner
// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkxlbmkgTG92ZSIpOwp9LCA1MDAwKTsKCmNvbnNvbGUubG9nKCJXZWxjb21lIHRvIGxvdXBlLiIpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Leni Love");
}, 5000);

console.log("Welcome to loupe.");

// First the synchornus code is executed then Asyncronus waits in the callback queue untill the call stack is empty
// then gets executed so that teh blocking is avoided 

// Need is that JS is single thread then how asynchronus code is managed/handled, maintainence of concurency and responsive things.
// This all can be done through eventloop.