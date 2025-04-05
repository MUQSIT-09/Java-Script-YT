// Event

// Event is like an announcment for seekings everyone attention ex = pressing any key,scrolling etc

// Event - Target

//  A type of entity where the evnt is received and there are eventlistener to handle it given by the devlopers

function changetext() {
    let fpara = document.getElementById("fpara");
    fpara.textContent="Hello Shah"
}
let fpara = document.getElementById("fpara");
fpara.addEventListener('click',changetext)

// Another way - But it is not used mostly, beacuse gives an error while reoveeventlistner as they both becomes 2 different objects
// The condition is inside removeListener which function is used it should be same as addeventlistner as it refers to the same function.

// let fpara = document.getElementById("fpara");
// fpara.addEventListener('click',function changetext() {
//     let fpara = document.getElementById("fpara");
//     fpara.textContent="Hello Shah"
// })
