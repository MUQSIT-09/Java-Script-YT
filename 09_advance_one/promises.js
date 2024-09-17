// Resolve(try) ==> When a promise is fulfilled (success), the resolve function is called. 
// It passes the result (the value) of the successful operation to the next .then() block. (handles success.)
// Reject(catch) ==>When a promise is rejected (failure), the reject function is called. 
// It passes the reason (an error or failure message) to the .catch() block.(handles failure.)

const promiseone = new Promise(function (resolve,reject) {
    //Do an async task
   // DB calls, cryptography, network
   setTimeout(function () {
       console.log('Async task is completed');
       resolve()
   },1000)  
})
promiseone.then(function(){
   console.log("Promise consumed");
})

// Without declarring into an const:
new Promise(function(resolve,reject){
   setTimeout(function(){
       console.log("Async task 2");
       resolve()
   }, 1000)

}).then(function(){
   console.log("promise 2 completed");
})


//  Sending the parameters:
const promisethree=new Promise(function(resolve,reject){
   setTimeout(function(){
       resolve({name:"azam",almamatters:"PHD"});
   },2000)
})
promisethree.then((name)=>{
   console.log(name);
})

// Now taking the case of reject(catch) also:
const promisefour=new Promise(function(resolve,reject){
   setTimeout(function(){
       let error = false
       if (!error) {
           resolve({person:"Nida",Age:"23"});
       } else {
           reject('ERROR: Something went wrong')
       }
   },1500)
})
//  If i want only the person name:we can't declare the const and access the msg.personname for that we need to chainning.
promisefour.then((msg)=>{
   console.log(msg);        // o/p -----> { person: 'Nida', Age: '23' }
   return msg.personname;   // for doing chainnging we need this return statement as we are sending this to next then. 
}).then((personname)=>{
   console.log(personname); // o/p ------> Nida.
}).catch((error)=>{
   console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


// Another way: Using through async, await:
// Where we need not to handle the catch staement it waits for the conditions to occur 
// If the work is not done then it gets stop --->ex: when the darabase collection doesn't occur so we don't go front further.

// async(makes a function return a promise.): When you mark a function with async, it means that the function will always return a promise,
//  even if it doesn't explicitly return one. It allows you to use await inside the function.
// await: await is used inside an async function to pause the execution of the code until the promise is resolved. 
// It's like saying, "Wait for this promise to finish, then move on."

const promiseFive = new Promise(function(resolve, reject){
   setTimeout(function(){
       let error = false
       if (!error) {
           resolve({username: "javascript", password: "123"})
       } else {
           reject('ERROR: JS went wrong')
       }
   }, 1000)
});

async function consumePromiseFive(){
   try {
       const response = await promiseFive
       console.log(response);  // { username: 'javascript', password: '123' }
   } catch (error) {
       console.log(error); //ERROR: JS went wrong
   }
}

consumePromiseFive()



// -------------------------> FETCH

// If await is not given before the response.json() conversion of data.
//  This will not get the data as async take time for fetching the data.

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') 
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

// In then,catch format:
// *fetched data from github/hiteshchowdhary will come first in output other then the above code functions.
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
   return response.json()
})
.then((data) => {
   console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.