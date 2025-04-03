## 🗑️ JavaScript Garbage Collector

### 📌 What is Garbage Collection?
Garbage Collection (GC) is an **automatic memory management process** in JavaScript that frees up memory by removing objects that are no longer in use.

### 🔥 Key Points:
- JS **automatically** deallocates memory for objects no longer referenced.
- **We cannot manually trigger GC**, as it runs in the background.

---

### 🔹 Example 1: Function Scope & Garbage Collection
```js
function createObject() {
    let obj = { name: "John", age: 30 }; 
    console.log("Object created:", obj);
}

createObject();  // After this, 'obj' is no longer accessible
```
✅ Since `obj` is declared inside `createObject()`, once the function execution ends, **obj becomes unreachable**, and GC frees its memory.

---

### 🔹 Example 2: Removing Object References
```js
let person = { name: "Alice", age: 25 };
console.log("Before deletion:", person);

person = null;  // Removes reference, making it eligible for garbage collection
```
✅ **Assigning `null` to an object** removes its reference, allowing GC to clean it up.

---

### 🔹 Example 3: Circular References (Handled by GC)
```js
let obj1 = {};
let obj2 = {};

obj1.ref = obj2;
obj2.ref = obj1;  // Circular reference

obj1 = null;
obj2 = null;  // GC can now remove both objects
```
✅ Modern JavaScript engines can **detect circular references** and free memory accordingly.

---

### 💡 Takeaway:
- **Don't worry about freeing memory manually!**
- JavaScript **automatically detects unreachable objects** and removes them.
- **Avoid memory leaks** by nullifying unnecessary references.

🚀 **Garbage Collection keeps our applications efficient and memory-optimized!**