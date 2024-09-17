// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// Here we are creating new object in top highest level heiarchy so it will be applicable to all function,string,array,object etc
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

// Here we are creating new object in Array so it will be applicable to Only array.
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

heroPower.hitesh()       // o/p ---> hitesh is present in all objects
myHeros.hitesh()         // o/p ---> hitesh is present in all objects
myHeros.heyHitesh()      // o/p ---> Hitesh says hello
// heroPower.heyHitesh()    // o/p ---> TypeError: heroPower.heyHitesh is not a function, 
//Doesn't have heyhitesh access as it is in array which is in lower level so it will be limeted upto array only.


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User
console.log(Teacher.__proto__);  // o/p ---> { name: 'chai', email: 'chai@google.com' }


// modern syntax
// setPrototypeOf --> Sets the prototype of a specified object o to object proto or null. Returns the object o.
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

// Output:
// ChaiAurCode
// True length is: 11
// hitesh
// True length is: 6
// iceTea
// True length is: 6


// Summary:
/*
 1) If you want that a method should be accessible or present in all objects in javascript (for ex: arrays, strings,
  functions,etc) then you can set your own method in the top level Object (because everything is an object in javascript) by using | Object.prototype.{method name} = function(){} | , 
  after doing this you will have the access of your {method.name} from all objects for ex: every array that you declare, every string that you declare and so on. 

2) But lets say if you want a certain method that should be accessible only on a certain object 
( for example : (this is used in the video) you want a trueLength() {this method returns the true length of an array by trimming all the whitespaces} 
 method to accessed on all String declarations ,then you can be like | String.prototype.trueLength = function(){ code that does trimming and return length }
  | and this will be accessible on all strings . 

3) this keyword in javascript refers to the current context of who is calling . matlab this boleto jisne bulaya . 
example: if you say  | "hemant   ".trueLength() | then how will the trueLength() method knows that on whom it have to perform . 
so we use this in the trueLength() function definition so it will automatically take the context of by whom the method is callled , boleto jisne bulaya uska kaam hoga.....
*/