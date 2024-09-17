// Super :If you are inside a constructor of a subclass,
//  you can use super() to call the parent class's constructor and inherit its properties.(get rid off call())
class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

/* The super have username as parameter it checks from which class Teacher si extended the parent class(User) then 
it goes into User class and givs the parameters with this in it implecitly, then changes them and inherit to it.
*/

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()        // o/p ---> USERNAME is chai
const masalaChai = new User("masalaChai")

masalaChai.logMe()  // o/p ---> USERNAME is masalaChai

console.log(chai instanceof Teacher);   // o/p ---> true
console.log(chai instanceof User);      // o/p ---> true