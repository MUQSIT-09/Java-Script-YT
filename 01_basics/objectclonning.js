// Object Clonning

// Object is said to dynamic because we can change the object properties at the run time

let obj ={
    age:12,
    weight:68,
    height:192
}
console.log(obj);  // { age: 12, weight: 68, height: 192  --> Before the color object is added dynamically.

obj.color = "Green";
console.log(obj);  // { age: 12, weight: 68, height: 192, color: 'Green' }  --> After the color object is added dynamically.

// Clonning Methids:
// 1. Spread operator

let src ={
    age:12,
    weight:68,
    height:192
} 

let dest ={...src} 

src.age = 95;

console.log("src:",src);        //  src: { age: 12, weight: 68, height: 192 }   
console.log("dest:",dest);      //  dest: { age: 12, weight: 68, height: 192 }

// If we still have the doubt that it is not cloned then we can change any of the properties of the object and compare both the objects.

console.log("src:",src);   // src: { age: 95, weight: 68, height: 192 } 

// If we could have teh same refernce and single object only then: The age property in both the objects will be same

let dest1 = src;
src.age = 96;

console.log("src:",src);        //  src: { age: 96, weight: 68, height: 192 } 
console.log("dest1:",dest1);     // dest1: { age: 96, weight: 68, height: 192 }

// 2. Assign Method:

let dest2 = Object.assign({},src);

console.log("src:",src);        //  src: { age: 12, weight: 68, height: 192 } 
console.log("dest2:",dest2);   // dest2: { age: 12, weight: 68, height: 192 }

// If we want to check by changing any property of the object:

dest2.age=31;

console.log("src:",src);        //  src: { age: 12, weight: 68, height: 192 } 
console.log("dest2:",dest2);    //  dest2: { age: 31, weight: 68, height: 192 }

// If we want to clone one or more objects at a time:

let leni={
    size:64,
    horse:31.,
}

let dest3 = Object.assign({},src,leni);
console.log(dest3);     //  { age: 12, weight: 68, height: 192, size: 64, horse: 31 }

let dest4={}

for(let key in src){
    let newkey = key;
    let newvalue = src[key];
    // insert newkey and value in dest and create a clone
    dest4[newkey] = newvalue;
}

console.log("src:",src);        //  src: { age: 12, weight: 68, height: 192 } 
console.log("dest4:",dest4);    //  dest2: { age: 12, weight: 68, height: 192 }

// If we want to check by changing any property of the object:

src.age=90;

console.log("src:",src);        //  src: { age: 90, weight: 68, height: 192 }
console.log("dest4:",dest4);    //  dest2: { age: 12, weight: 68, height: 192 }



