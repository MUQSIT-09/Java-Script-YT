const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);     // o/p ---> hitesh
        console.log(this);      //  New instances under this function scope
        //  o/p ---> { username: 'hitesh',loginCount: 8, signedIn: true, getUserDetails: [Function: getUserDetails] }
    }

}



console.log(user.username)      // o/p ---> Username: hitesh
console.log(user.getUserDetails());  // o/p ---> Got user details from database
console.log(this);              // o/p ---> {} as it is global it will be empty


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this    // Implicitly return is there.
}

//  This ===> Gives us The Current context.
//  If you don't use new keyword then new instances will not be creted and it will overwrite the old instances.
//  you will get many othen things along with your user data which can be avoided if you use new keyword.
//  Ex: usertwo will ovwewrite userone if you will not use new keyword. 

const userOne = User("hitesh", 12, true)
const userTwo = User("ChaiAurCode", 11, false)
console.log(userOne.constructor);   // o/p ---> [Function: Object]
console.log(userOne);  // will be overwritten by usertwo as we are not making new instances by new keyword.
console.log(userTwo);   // o/p --> User{username: 'ChaiAurCode',loginCount: 11,isLoggedIn: false,greeting: [Function (anonymous)]}


// As we wre using new keyword it will create an new instance and store only the useer data in it other data will be avoided.
// const userOne = new User("hitesh", 12, true)
// const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);   // o/p ---> [Function: User]
console.log(userTwo);              // o/p ----> User {username: 'ChaiAurCode', loginCount: 11, isLoggedIn: false,greeting: [Function (anonymous)]}