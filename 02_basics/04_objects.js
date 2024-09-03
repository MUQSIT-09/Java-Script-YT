const tinderUser1 = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "billu",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); //billu

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Concatination
const obj33 = { obj1, obj2 } 
console.log(obj33); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } will become the two obj1,2 in obj33.
// Another ways which is correct to do, which will not have 2d like structure this is correct way of concatination of many objects.
const obj31 = Object.assign({}, obj1, obj2, obj4)  // {}---> This is to ensure we are adding in new obj3 not in obj1 (if it is removed)
console.log(obj31); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//Spread Operator:
const obj3 = {...obj1, ...obj2}
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(users[1].email); //h@gmail.com
console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hayat"
}

// course.courseInstructor ---> Always we can't access in this way, we can use the below method to access. 

const {courseInstructor: instructor} = course
// courseInstructor = instructor (is converted to instructor name for easy usage and clean code writing)
// console.log(courseInstructor); //hayat
console.log(instructor); //hayat

// {
//     "name": "haya",
//     "coursename": "js in hindi",
//     "price": "free"
// }   ---> This a json which is having the objects (can be used to retrive data with the help of API).


[
    {},
    {},
    {}
]  //   ----> Thsi a json which is having the Array (can be used to retrive data with the help of API).
