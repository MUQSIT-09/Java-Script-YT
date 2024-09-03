// Date And Time:

// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
// We can use various methods to convert this date into more readable value.

let myDate1 = new Date()
console.log(myDate1.toString()); // Tue Sep 03 2024 06:54:53 GMT+0000 (Coordinated Universal Time)
console.log(myDate1.toDateString()); // Tue Sep 03 2024
console.log(myDate1.toLocaleString()); // Tue Sep 03 2024
console.log(myDate1.toISOString()); //2024-09-03T07:17:24.549Z
console.log(myDate1.toJSON()); //2024-09-03T07:18:11.594Z
console.log(myDate1.toLocaleDateString()); //9/3/2024
console.log(myDate1.toLocaleString()); //9/3/2024, 7:19:23 AM
console.log(myDate1.toTimeString()); //07:20:06 GMT+0000 (Coordinated Universal Time)
console.log(myDate1.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
console.log(myDate1.toLocaleDateString()) //Output : 10/9/2023
console.log(myDate1.toLocaleTimeString()) // Output : 7:45:31 AM
console.log(typeof myDate1); // object

let myCreatedDate1 = new Date(2023, 0, 23) //1/23/2023, 12:00:00 AM
let myCreatedDate2= new Date(2023, 0, 23, 5, 3) //1/23/2023, 5:03:00 AM
let myCreatedDate3 = new Date("2023-01-14") // 1/14/2023, 12:00:00 AM
let myCreatedDate = new Date("01-14-2023") //1/14/2023, 12:00:00 AM
console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()
// use-- quizes,pollsetc
console.log(myTimeStamp); //1725347579964
console.log(myCreatedDate.getTime()); //1673654400000
console.log(Math.floor(Date.now()/1000)); //1725347613

let newDate = new Date()
console.log(newDate); //2024-09-03T07:13:53.239Z
console.log(newDate.getMonth() + 1);    // 9
console.log(newDate.getDay());     // 2

// // `${newDate.getDay()} and the time `

// Can cuztomize in which way yiu want 
newDate.toLocaleString('default', {
    weekday: "long",
    
})


