//  In JavaScript, a descriptor refers to an object that defines some properties or characteristics of another object’s property.
//  It controls the behavior of the property when it is accessed or modified.

/*
In JavaScript, a descriptor refers to an object that defines some properties or characteristics of another object’s property. It controls the behavior of the property when it is accessed or modified.

There are two main types of descriptors:

Data descriptor – defines a property's value and whether it can be changed.
Accessor descriptor – defines a getter/setter for the property */

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Defining the descripter.
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}

/* output:
    Final Output:
        The descriptor of Math.PI will show that it’s not writable or configurable.
        Trying to modify Math.PI doesn’t work because it's not writable.
        The chai.name property is enumerable and writable.
        The loop prints out the properties of the chai object, skipping the function orderChai.
*/



/* 
Retrieve Descriptor: Object.getOwnPropertyDescriptor gets details about the properties of Math.PI, showing it’s not writable or configurable.
Modify Constant: Attempting to change Math.PI fails because it's not writable.
Descriptor for Object Property: Object.getOwnPropertyDescriptor for chai.name shows it’s writable and enumerable.
Update Descriptor: Object.defineProperty changes only the enumerable attribute of chai.name.
Check Updated Descriptor: The updated descriptor confirms chai.name is still writable and the changes are reflected.
Iterate Over Properties: A loop logs non-function properties of the chai object, showing only name, price, and isAvailable.
*/