// Classes In JS:

// what is a class?
// class is an blueprint, example an blueprint for building an house
// which consists of behaviour,properties inside it.
// for accessing this behaviour,properties we require this key word which gives the current context.

// where we can intialize in two ways either public or private
// public can be accessed anywhere like inside and outside the class

// private can only be accessed inside the class, it is declare with the help of # 
// for accessing the private outside we require the getter and setters

// geters is used to fetch the data which is private from the class 
// setters is used to modify the data which is inside the class

// Constructor => if any of the properties and behavior is not intialized then we can use constructor for intializing it.
// we can intialize the private behavior/property also by using teh constructor. 

class Human{
    // properties

    age // public 
    #weight = 64 //private
    height = 6

    constructor(newage,newweight,newheight){
        this.age=newage;
        this.weight=newweight;
        this.newheight=newheight;
    }

    // behaviour

    walking(){
        console.log("The Human Is Walking With", this.#weight);
    }
    
    get fetchwalking() {
        return this.#walking();  // ❌ ERROR: Private method cannot be accessed outside
    }

    enjoying(){
        console.log("The Human Is Enjoying With", this.height);
    }
    stres(){
        console.log("The Human Is In Stress In This Age:", this.age );
    }

    get fetchweight(){
        return this.#weight;
    }

    set modifyingweight(value){
        this.#weight = value;
    }
}

// without using constructor:
let obj = new Human();  
console.log(obj.weight); undefined
obj.walking();       // The Human Is Walking With 64  --> here we can obsereve that private is pnly accessed inside the class.


// If we want the private property to be accessed outside the class we should use getters to fetch it
let obj1 = new Human();
console.log(obj1.fetchweight());  // 64
obj1.walking();      // The Human Is Walking With 64

let obj2 = new Human();
obj2.modifyingweight = 75; 
console.log(obj2.modifyingweight); // the value will be set to 75 as per teh above line.
obj2.walking();      // The Human Is Walking With 75

// while uisng the constructor

let obj3 = new Human(60,120,180);  
console.log(obj.weight);  // 120
obj3.walking();      // The Human Is Walking With 64

// If you make any of the behaviour as private then it can't be accessed it gievs an error untill you give use getters/seeters

let obj4 = new Human(60,120,180);  
obj4.walking()    // TypeError: obj4.walking is not a function

// How can you overcome it:
// we can not call it, if you try to call a private method via a getter, it won't work:

// Imp points about getters:
//  Can Getters Access Private Properties? ✅ YES
// ❌ Can Getters Access Private Methods? NO! 🚨

// Imp points about seeters:
// Can Setters Modify Private Properties? ✅ YES
// ❌ Can Setters Modify Private Methods? NO! 🚨


// Default Parameters:

// How will you handle teh case when you have not given the parameters whil you are calling the function

function sayname(myname) {
    console.log("My Name Is:",myname);
}
sayname();   //  My Name Is: undefined

// Setting the default parameter

function sayname1(myname = "Zaviyaan") {
    console.log("My Name Is:",myname);
}
sayname1();  // My Name Is: Zaviyaan   --> when no parameter is passed
sayname1("Khushiyann"); // My Name Is: Khushiyann  --> when parameter is passed

// Muliople Parameter

// If no parameter passed and no default parameter is intialized.
function sayname2(fname,lname) {
    console.log("My FullName Is:",fname ," ", lname);
}
sayname2(); // My FullName Is: undefined   undefined

// If no parameter passed and Both default parameter is intialized.

function sayname3(fname = "Zavi",lname = "Yaan") {
    console.log("My FullName Is:",fname ," ", lname);
}
sayname3();    // My FullName Is: Zavi   Yaan

// If 1 parameter passed and 1 default parameter is intialized.

function sayname4(fname,lname = "Yaan") {
    console.log("My FullName Is:",fname ," ", lname);
}
sayname4("zairu");  // My FullName Is: zairu   Yaan

// If 1 parameter passed and No default parameter is intialized.

function sayname5(fname,lname) {
    console.log("My FullName Is:",fname ," ", lname);
}
sayname5("zairu");  // My FullName Is: zairu   undefined

// If 1 parameter passed and Both default parameter is intialized.

function sayname6(fname = "Zavi",lname = "Yaan") {
    console.log("My FullName Is:",fname ," ", lname);
}
sayname6("zari");  // My FullName Is: zari   Yaan

// If Both parameter passed and Both default parameter is intialized.

function sayname7(fname = "Zavi",lname = "Yaan") {
    console.log("My FullName Is:",fname ," ", lname);
}
sayname7("Leni","Lingi");   // My FullName Is: Leni   Lingi

// Parameter depending in anotehr parameter
// here one para,eter is depended on the another parameter

// If Both parameter passed and 1 default parameter is intialized.

function sayname8(fname = "Zavi",lname = fname.toUpperCase()) {
    console.log("My FullName Is:",fname ," ", lname);
}
sayname8("Leni","Tate")   // My FullName Is: Leni   Tate

// If 1 parameter passed and 1 default parameter is intialized.

function sayname9(fname = "Zavi",lname = fname.toUpperCase()) {
    console.log("My FullName Is:",fname ," ", lname);
}
sayname9("Leni")   // My FullName Is: Leni   LENI

// If No parameter passed and 1 default parameter is intialized.

function sayname10(fname = "Zavi",lname = fname.toUpperCase()) {
    console.log("My FullName Is:",fname ," ", lname);
}
sayname10()   // My FullName Is: Zavi   ZAVI

//  Default parameter is an object 

function solve(value = {age:64 ,weight : 95 , height : 31}){
    console.log("Hii Everyone: ",value);
}
solve();  // Hii Everyone:  { age: 64, weight: 95, height: 31 }

//  Same we can also giev the array as the parameter

function solve2(value = ["Leni","Lingi","LeniLingi","Lenoide"]){
    console.log("Hii Everyone: ",value);  
}
solve2();  //  Hii Everyone:  [ 'Leni', 'Lingi', 'LeniLingi', 'Lenoide' ]

// If we send null as the parameter

function solve3(value = "Leni"){
    console.log("Hii Everyone: ",value);  
}
solve3(null);   // Hii Everyone:  null

// If we give undefined as the parameter then the default value will be printed

function solve4(value = "Leni"){
    console.log("Hii Everyone: ",value);  
}
solve4(undefined);  // Hii Everyone:  Leni

// Sending functions as the parameter

function getage(){
    return 64;
}
function aboutlingi(hisname="leni",age=getage()){
    console.log("Hi I am",hisname,"And My Age is",age);
}
aboutlingi();   // Hi I am leni And My Age is 64