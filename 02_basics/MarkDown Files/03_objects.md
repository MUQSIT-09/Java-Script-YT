# 📝 JavaScript Objects: Symbols, Methods, and Copies

## 🌟 Singleton and Object Creation
- Singleton objects are created using `Object.create()`.
- Object literals provide a simpler way to create objects.

```javascript
const mySym = Symbol("key1")

const JsUser = {
    name: "LeniLingi",
    "full name": "Leni Lenoide",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Lenoide@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    greet: function () {
        console.log("Hey, How Are You Guys Doing!");
    }
}
```

## 📧 Accessing Object Properties
- Dot notation: `JsUser.email`
- Bracket notation: `JsUser["email"]`
- Access symbols: `JsUser[mySym]`

```javascript
console.log(JsUser.email);        // Lenoide@google.com
console.log(JsUser["email"]);     // Lenoide@google.com
console.log(JsUser["full name"]); // Leni Lenoide
console.log(JsUser[mySym]);       // mykey1
console.log(typeof JsUser.mySym); // undefined (when accessed without brackets)
```

## ❄️ Freezing Objects
- `Object.freeze()` prevents further modifications.

```javascript
JsUser.email = "LeniLingi@chatgpt.com";
Object.freeze(JsUser);
JsUser.email = "LeniLingi@microsoft.com"; // No effect
console.log(JsUser.email); // LeniLingi@chatgpt.com
```

## 🪄 Adding Methods
```javascript
JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting()); // Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user, LeniLingi
```

## 📋 Shallow vs Deep Copy
- **Shallow Copy:** Copies only the first level. Nested objects remain references.
- **Deep Copy:** Creates a completely independent copy, including nested objects.

```javascript
// 🏷️ Shallow Copy
let original = { a: 1, b: { c: 2 } };
let shallowCopy = { ...original };
shallowCopy.b.c = 42;
console.log(original.b.c); // 42 (affected)

// 🏷️ Deep Copy
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 99;
console.log(original.b.c); // 42 (unaffected)
```

### 📌 Key Points:
- Shallow copies only duplicate top-level properties.
- Deep copies ensure complete separation of nested objects.


