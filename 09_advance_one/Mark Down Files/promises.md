# 📘 Async, Await, Promises & Fetch API in JavaScript

## 🔹 What is a Promise?

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation.

- **resolve()** — When the async task is successful.
- **reject()** — When the async task fails.

### ✅ Example: Basic Promise with `resolve()`

```js
const promiseone = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is completed');
        resolve();
    }, 1000);
});
promiseone.then(function() {
    console.log("Promise consumed");
});
```

### ✅ Without using a variable

```js
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("promise 2 completed");
});
```

### ✅ Promise with returned data

```js
const promisethree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ name: "azam", almamatters: "PHD" });
    }, 2000);
});
promisethree.then((data) => {
    console.log(data);
});
```

### ❌ Promise with `catch()`

```js
const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({ person: "Nida", Age: "23" });
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1500);
});

promisefour.then((msg) => {
    console.log(msg);
    return msg.person;
}).then((personName) => {
    console.log(personName);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));
```

## 🔹 `async` & `await`

- `async` makes a function return a **promise**.
- `await` is used to **wait for a promise to resolve**.

### ✅ Using `async/await`

```js
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();
```

---

## 🌐 Using `fetch()` for API Calls

### ✅ `fetch()` with `.then()`

```js
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error));
```

### ✅ `fetch()` with `async/await`

```js
async function getdata() {
    let response = await fetch('https://api.github.com/users/hiteshchoudhary');
    let dataprocessed = await response.json();
    console.log(dataprocessed);
}

getdata();
```

---

## 🔸 Sample API GET Request:

```js
async function getData() {
    const url = "https://dummyjson.com/posts";
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data response: ", data);
}

getData();
```

## 🔸 Sample API POST Request:

```js
async function postData() {
    const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Love babbar -> I am in love with someone.',
            userId: 5,
            // other post data
        })
    });
    let data = await response.json();
    console.log("post data response: ", data);
}

postData();
```

---

## ⭐ Summary Table

| Concept   | Description                            |
| --------- | -------------------------------------- |
| Promise   | Represents async completion/failure    |
| resolve() | Handles success                        |
| reject()  | Handles failure                        |
| .then()   | Handles resolved data                  |
| .catch()  | Handles rejected error                 |
| async     | Declares function that returns promise |
| await     | Waits for a promise to resolve         |
| fetch()   | Makes API request, returns promise     |

## 📚 External Resources

- [MDN Web Docs on Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN: async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [DummyJSON API](https://dummyjson.com/)
- [GitHub API](https://api.github.com)

---

🧠 **Tips:**

- Always handle `fetch()` with try/catch or `.catch()` to avoid unhandled promise rejections.
- Use `Promise.all` to wait for multiple promises simultaneously.
- Use `.finally()` to run cleanup code regardless of resolve/reject.

✨ Happy coding!

