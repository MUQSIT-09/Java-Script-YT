//  Static Keyword :method is static, meaning you can call it directly on the class, but you cannot call it on an instance of class.
//  A static method can be called directly on the class without needing to create an instance (object) of that class. 
//  It is commonly used for utility functions or functions that don't need instance-specific data.

class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
    createuser(){
        return `123`
    }
}

const hitesh = new User("hitesh")
console.log(hitesh.createId())              // o/p ---> TypeError: hitesh.createId  is not a function
// Here createuser will get executed becuase it is not static method.
console.log(hitesh.createuser());           // o/p ---> 123

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());             // o/p --> TypeError: iphone.createId is not a function
console.log(iphone.createuser());           // o/p ---> 123


// Summary:

// Static methods (like createId()) are called on the class, not on instances.
// You can call User.createId() or Teacher.createId() directly, 
// but calling iphone.createId() or hitesh.createId() will result in an error.