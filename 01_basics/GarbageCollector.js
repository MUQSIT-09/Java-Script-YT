// Garbage Collector:

// used in memory management

// If you have written a program in which you have allocated a memory which is no longer in use, 
// unused then it can be freed by garbage collector

// we have no control under garbage collector it is always running in background

function createObject() {
    let obj = { name: "John", age: 30 }; 
    console.log("Object created:", obj);
}

createObject();  // After this function call, 'obj' is no longer accessible

// The Garbage Collector will now free the memory allocated for 'obj' 
// because there are no references to it anymore.

// Explanation:
// Inside createObject(), an object { name: "John", age: 30 } is created.

// After the function execution ends, obj is not referenced anywhere, making it eligible for garbage collection.

// JavaScript's engine automatically cleans up such unused objects.

// 💡 Note: We cannot manually trigger garbage collection, as it runs in the background. 🚀
