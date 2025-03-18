// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "LeniLingi",
    "full name": "Leni Lenoide", // we use " " while we are having space between teh content ex: full name
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Lenoide@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    greet:function(){
        console.log("Hey, How Are You Guys Doing!");
    }
}


console.log(JsUser.email)        //Lenoide@google.com
console.log(JsUser["email"])     //Lenoide@google.com
console.log(JsUser["full name"]) //Leni Lenoide
console.log(JsUser[mySym])       //mykey1 --> we get [Symbol(key1)]: 'mykey1'

console.log(JsUser.mySym)           //***  gives output:mykey1 when we declare only mysum without square brackets[] otherwise undefined.
console.log(typeof JsUser.mySym)    //***  o/p: string --> when we declare only mysum without square brackets[] otherwise undifined.
console.log(typeof JsUser);         // Hey, How Are You Guys Doing!
JsUser.greet();                     // object

JsUser.email = "LeniLingi@chatgpt.com"
Object.freeze(JsUser)        // fixed it permenently, can't change further.
JsUser.email = "LeniLingi@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); // Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user, LeniLingi