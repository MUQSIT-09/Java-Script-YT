# Classes in JavaScript

## 📌 What is a Class?

A **class** in JavaScript is a blueprint for creating objects. It defines **properties** (attributes) and **methods** (behavior) that the objects will have.

🔹 Example: Think of a **blueprint for a house**—it defines the structure, but each house built from it has unique details.

```javascript
class Human {
    age; // Public property
    #weight = 64; // Private property
    height = 6; // Public property
}
```

## 🔓 Public vs. 🔒 Private Properties

- **Public Properties**: Can be accessed anywhere inside or outside the class.
- **Private Properties**: Declared using `#` and can **only** be accessed within the class.

```javascript
class Person {
    publicProperty = "I'm Public";
    #privateProperty = "I'm Private";
}

let obj = new Person();
console.log(obj.publicProperty); // ✅ Accessible
console.log(obj.#privateProperty); // ❌ ERROR: Private property
```

## 🏗️ Constructor in JavaScript

- **A constructor initializes properties when an object is created.**
- You can also initialize **private properties** inside the constructor.

```javascript
class Human {
    #weight;
    constructor(newAge, newWeight, newHeight) {
        this.age = newAge;
        this.#weight = newWeight;
        this.height = newHeight;
    }
}
let person1 = new Human(25, 70, 5.9);
console.log(person1.age); // ✅ 25
console.log(person1.#weight); // ❌ ERROR: Private property
```

## 🔍 Getters and Setters

To **access or modify private properties**, we use **getters** and **setters**.

### **🔹 Getters (Fetching Private Data)** ✅

```javascript
class Human {
    #weight = 64;
    get fetchWeight() {
        return this.#weight;
    }
}
let person = new Human();
console.log(person.fetchWeight); // ✅ 64
```

### **🔹 Setters (Modifying Private Data)** ✅

```javascript
class Human {
    #weight = 64;
    set modifyWeight(value) {
        this.#weight = value;
    }
}
let person = new Human();
person.modifyWeight = 75;
console.log(person.modifyWeight); // ✅ 75
```

### 🚨 **Getters & Setters Cannot Access Private Methods!**

- Private methods cannot be accessed directly through **getters** or **setters**.

```javascript
class Human {
    #weight = 64;
    #walking() {
        console.log("Walking with weight:", this.#weight);
    }
    get fetchWalking() {
        return this.#walking(); // ❌ ERROR
    }
}
```

## 🏆 Important Points

✅ **Getters can access private properties.**
❌ **Getters CANNOT access private methods.**
✅ **Setters can modify private properties.**
❌ **Setters CANNOT modify private methods.**

---

## 🎯 **Default Parameters in JavaScript**

### 🔹 **What happens if no parameter is provided?**

```javascript
function sayName(name) {
    console.log("My Name Is:", name);
}
sayName(); // My Name Is: undefined
```

### 🔹 **Setting a Default Parameter**

```javascript
function sayName(name = "John") {
    console.log("My Name Is:", name);
}
sayName(); // ✅ My Name Is: John (Default Value)
sayName("Doe"); // ✅ My Name Is: Doe (Overridden Value)
```

### 🔹 **Handling Multiple Parameters**

```javascript
function fullName(firstName = "John", lastName = "Doe") {
    console.log("My Full Name Is:", firstName, lastName);
}
fullName(); // ✅ My Full Name Is: John Doe
fullName("Alice"); // ✅ My Full Name Is: Alice Doe
fullName("Alice", "Smith"); // ✅ My Full Name Is: Alice Smith
```

### 🔹 **Using One Parameter as a Default for Another**

```javascript
function greet(name = "John", greeting = `Hello, ${name}!`) {
    console.log(greeting);
}
greet(); // ✅ Hello, John!
greet("Alice"); // ✅ Hello, Alice!
```

### 🔹 **Default Parameters as Objects & Arrays**

```javascript
function introduce(person = {name: "John", age: 30}) {
    console.log("Name:", person.name, "Age:", person.age);
}
introduce(); // ✅ Name: John Age: 30
```

```javascript
function favoriteFoods(foods = ["Pizza", "Burger", "Pasta"]) {
    console.log("Favorite Foods:", foods);
}
favoriteFoods(); // ✅ Favorite Foods: [ 'Pizza', 'Burger', 'Pasta' ]
```

### 🔹 **Handling Null & Undefined Values**

```javascript
function saySomething(message = "Hello!") {
    console.log(message);
}
saySomething(null); // ✅ null (Passed explicitly)
saySomething(undefined); // ✅ Hello! (Default value used)
```

### 🔹 **Using Functions as Default Parameters**

```javascript
function getDefaultAge() {
    return 30;
}
function introduce(name = "John", age = getDefaultAge()) {
    console.log(`Hi, I'm ${name} and I'm ${age} years old.`);
}
introduce(); //  ✅ Hi, I'm John and I'm 30 years old.
introduce("Alice", 25); // ✅ Hi, I'm Alice and I'm 25 years old.
```

---

## 🎉 Conclusion

✅ **Classes allow us to create reusable blueprints for objects.**

✅ **Public and Private properties control access levels.**

✅ **Getters and Setters provide controlled access to private properties.**
\
✅ **Default parameters handle missing function arguments gracefully.**

🚀 **Mastering these concepts will make your JavaScript code more structured, maintainable, and efficient!** 💡 Happy Coding!

