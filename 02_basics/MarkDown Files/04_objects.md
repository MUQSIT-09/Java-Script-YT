# JavaScript Objects - Tinder Example

## Tinder User Object

```javascript
const tinderUser1 = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }
```

## Nested Objects

```javascript
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
```

## Object Concatenation

```javascript
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Incorrect concatenation
const obj33 = { obj1, obj2 }
console.log(obj33);
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// Correct concatenation
const obj31 = Object.assign({}, obj1, obj2, obj4)
console.log(obj31);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Spread operator
const obj3 = {...obj1, ...obj2}
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
```

## Array of Objects

```javascript
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]

console.log(users[1].email);  //h2@gmail.com
```

## Object Methods

```javascript
console.log(Object.keys(tinderUser));     // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));   // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true
```

## Object Destructuring

```javascript
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hayat"
}

const {courseInstructor: instructor} = course
console.log(instructor); // hayat
```

## JSON Examples

```json
{
    "name": "haya",
    "coursename": "js in hindi",
    "price": "free"
}
```

```json
[
    {},
    {},
    {}
]
```





