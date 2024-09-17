## javascript and classes

## OOP
## Object

-collection of properties and methods (collections of related data and functions)
- They are used to group together values into a single structure, which can then be easily managed and    manipulated.
- Ex: toLowerCase
- A real-world item like a car, person, or book. 
- Each object has properties (like attributes or characteristics).
- Each object can also have methods, which are actions it can perform.

''' js
let car = {
  brand: "Toyota",  // Property (a characteristic of the car)
  color: "red",
  speed: 120,

  drive: function() {  // Method (an action the car can do)
    console.log("The car is driving!");
  }
};

  console.log(car.brand);  // Accessing a property -> Output: "Toyota"
  car.drive();  // Calling a method -> Output: "The car is driving!"
'''
- Here, car is an object.
- brand, color, and speed are properties.
- drive is a method (a function that belongs to the object).

## Why use OOP
## parts of OOP
Object literal

-Constructor function
-Prototypes
-Classes
-Instances (new, this)

## 4 pillars
## Abstraction
- Abstraction is the concept of hiding complex implementation details and exposing only the essential features of an object. It allows you to focus on what an object does rather than how it does it.
-Real-life example: Car Dashboard
-When you drive a car, you interact with the steering wheel, gas pedal, and brakes. You don't need to know how the engine works, how fuel is injected into the combustion chamber, or how the braking system operates. The car provides you with an interface (dashboard) to control it without revealing the complex mechanisms.
-In programming, abstraction provides the user with simple interfaces, while hiding the detailed, complex functionality.

## Encapsulation
-Encapsulation is the practice of bundling data (attributes) and methods (functions) that operate on that data into a single unit, or class. It also restricts access to some of the object's components to protect the integrity of that data.
-Real-life example: ATM Machine
-When you interact with an ATM, you can withdraw money or check your balance, but you don’t have access to the internal banking system or security algorithms that validate your request. The machine encapsulates its inner workings and only exposes specific functionality to users.
-In programming, encapsulation is used to restrict direct access to some of an object's components and can prevent the accidental modification of data.

## Inheritance
- Inheritance is a mechanism in which one class (child or subclass) acquires the properties and behaviors (methods) of another class (parent or superclass). It allows code reusability and hierarchy representation.
-Real-life example: Family Tree
-Children inherit traits like eye color or hair color from their parents, but they can also have their own unique features. Similarly, in programming, a subclass inherits properties and methods from a parent class, and it can also add its own unique behavior.

## Polymorphism
- Polymorphism means "many forms." It allows objects of different classes to be treated as objects of a common parent class, typically through method overriding. It enables one interface to be used for a general class of actions.
-Real-life example: Remote Control
-A remote control can be used for a TV, a DVD player, or an air conditioner. The remote has the same buttons (interface), but it performs different actions depending on the device it is controlling.
-In programming, polymorphism allows methods to have the same name but behave differently depending on the object calling the method.

##
Here’s a breakdown of the four key OOP concepts — Abstraction, Encapsulation, Inheritance, and Polymorphism — with real-life examples:

1. Abstraction
Definition: Abstraction is the concept of hiding complex implementation details and exposing only the essential features of an object. It allows you to focus on what an object does rather than how it does it.

Real-life example: Car Dashboard

When you drive a car, you interact with the steering wheel, gas pedal, and brakes. You don't need to know how the engine works, how fuel is injected into the combustion chamber, or how the braking system operates. The car provides you with an interface (dashboard) to control it without revealing the complex mechanisms.
In programming, abstraction provides the user with simple interfaces, while hiding the detailed, complex functionality.
js
Copy code
class Car {
  startEngine() {
    console.log("Engine started.");
  }

  accelerate() {
    console.log("Car is accelerating.");
  }
}

const myCar = new Car();
myCar.startEngine();  // You don't need to know how it works internally.
myCar.accelerate();   // Abstract interface provided by the car.
2. Encapsulation
Definition: Encapsulation is the practice of bundling data (attributes) and methods (functions) that operate on that data into a single unit, or class. It also restricts access to some of the object's components to protect the integrity of that data.

Real-life example: ATM Machine

When you interact with an ATM, you can withdraw money or check your balance, but you don’t have access to the internal banking system or security algorithms that validate your request. The machine encapsulates its inner workings and only exposes specific functionality to users.
In programming, encapsulation is used to restrict direct access to some of an object's components and can prevent the accidental modification of data.
js
Copy code
class ATM {
  #balance = 1000;  // Private field

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawal successful. New balance: $${this.#balance}`);
    } else {
      console.log("Insufficient funds.");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const myATM = new ATM();
myATM.withdraw(500);  // Works fine
console.log(myATM.getBalance());  // Can only access through method
3. Inheritance
Definition: Inheritance is a mechanism in which one class (child or subclass) acquires the properties and behaviors (methods) of another class (parent or superclass). It allows code reusability and hierarchy representation.

Real-life example: Family Tree

Children inherit traits like eye color or hair color from their parents, but they can also have their own unique features. Similarly, in programming, a subclass inherits properties and methods from a parent class, and it can also add its own unique behavior.
js
Copy code
class Animal {
  eat() {
    console.log("This animal is eating.");
  }
}

class Dog extends Animal {  // Dog is inheriting from Animal
  bark() {
    console.log("The dog is barking.");
  }
}

const myDog = new Dog();
myDog.eat();  // Inherited method
myDog.bark();  // Dog-specific method
4. Polymorphism
Definition: Polymorphism means "many forms." It allows objects of different classes to be treated as objects of a common parent class, typically through method overriding. It enables one interface to be used for a general class of actions.

Real-life example: Remote Control

A remote control can be used for a TV, a DVD player, or an air conditioner. The remote has the same buttons (interface), but it performs different actions depending on the device it is controlling.
In programming, polymorphism allows methods to have the same name but behave differently depending on the object calling the method.

## Summary:
-Abstraction: Hides complexity and shows only the essential details (e.g., car dashboard).

-Encapsulation: Bundles data and methods together and restricts access to protect the internal state (e.g., ATM machine).

-Inheritance: A class can inherit properties and methods from another class (e.g., family traits or parent-child relationship in objects).

-Polymorphism: Objects of different types can be treated as instances of the same class, allowing the same method to behave differently depending on the object (e.g., remote control for various devices).