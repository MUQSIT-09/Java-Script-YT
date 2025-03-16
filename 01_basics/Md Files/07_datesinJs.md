# ⏰ Date and Time in JavaScript

JavaScript stores dates as the number of milliseconds since **January 01, 1970** (UTC). Various methods help convert these dates into more readable formats.

## 📅 Creating Dates
```javascript
let myDate1 = new Date();
console.log(myDate1.toString()); // Tue Sep 03 2024 06:54:53 GMT+0000 (Coordinated Universal Time)
console.log(myDate1.toDateString()); // Tue Sep 03 2024
console.log(myDate1.toLocaleString()); // 9/3/2024, 7:19:23 AM
console.log(myDate1.toISOString()); // 2024-09-03T07:17:24.549Z
console.log(myDate1.toJSON()); // 2024-09-03T07:18:11.594Z
console.log(myDate1.toLocaleDateString()); // 9/3/2024
console.log(myDate1.toTimeString()); // 07:20:06 GMT+0000 (Coordinated Universal Time)
console.log(typeof myDate1); // object
```

## 🔢 Custom Date Creation
```javascript
let myCreatedDate1 = new Date(2023, 0, 23); // Month is 0-based (0 = January)
console.log(myCreatedDate1.toLocaleString()); // 1/23/2023, 12:00:00 AM

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString()); // 1/23/2023, 5:03:00 AM

let myCreatedDate3 = new Date("2023-01-14");
console.log(myCreatedDate3.toLocaleString()); // 1/14/2023, 12:00:00 AM
```

## ⏳ Timestamps
```javascript
let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1725347579964 (milliseconds since Jan 1, 1970)
console.log(Math.floor(Date.now() / 1000)); // 1725347613 (seconds since Jan 1, 1970)
```

## 🔢 Get Specific Date/Time Parts
```javascript
let newDate = new Date();
console.log(newDate.getMonth() + 1); // 9 (Months are 0-indexed)
console.log(newDate.getDay()); // 2 (0 = Sunday, 1 = Monday, 2 = Tuesday...)
```

## ✨ Formatting Dates
```javascript
console.log(newDate.toLocaleString('default', { weekday: 'long' })); // Tuesday
```

## 💡 Use Cases:
- Polls or quizzes to track time.
- Customizing the display of date and time.
- Converting timestamps to readable formats.

Let me know if you want any changes or enhancements! 🚀

