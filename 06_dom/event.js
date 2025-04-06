// Event

// Event is like an announcment for seekings everyone attention ex = pressing any key,scrolling etc

// Event - Target

//  A type of entity where the evnt is received and there are eventlistener to handle it given by the devlopers

function changetext() {
    let fpara = document.getElementById("fpara");
    fpara.textContent="Hello Shah"
}
let fpara1 = document.getElementById("fpara");
fpara1.addEventListener('click',changetext)

// Another way - But it is not used mostly, beacuse gives an error while reoveeventlistner as they both becomes 2 different objects
// The condition is inside removeListener which function is used it should be same as addeventlistner as it refers to the same function.

let fpara = document.getElementById("fpara");
fpara.addEventListener('click',function changetext() {
    let fpara = document.getElementById("fpara");
    fpara.textContent="Hello Shah"
})

// PreventDefault:

// If we want to avoid/prevent the default action/behaviour of any event.

let fanchor = document.getElementById("fanchor");
function avoiddefault(event){
    event.preventDefault();
    fanchor.textContent = "Welcome To Valhala";
}
fanchor.addEventListener('click',avoiddefault);

// output :
// changes the anchor tag text to click here to welcome to valhala

// Avoiding to Many Listeners:

// Applying one eventlistener on all the para tags.
let para = document.querySelectorAll('p');

function alertpara(event){
    // Only the span should be invoked or clicked 
    if(event.target.nodeName === 'SPAN'){
        alert("You have Clciked On Para:" + event.target.textContent);
    }
}

for(let i=0;i<para.length;i++){
    let paras = para[i];
    paras.addEventListener('click',alertpara);
}

let mydiv = document.getElementById('wrapper')

mydiv.addEventListener('click',alertpara);


// DOMContentLoaded:

// It will ensure that first the html dom is fully loadded first then only the javascript is run safely,
// especially when your <script> is placed in the <head> or before the DOM elements.

/*
🔥 Why use DOMContentLoaded?
    When the browser is loading a page, scripts might run before elements like <div id="wrapper"> exist in the DOM.
    If you try to access them too early (like using getElementById), you’ll get null.
    Using DOMContentLoaded ensures your JS runs only after all the HTML is parsed.

*/
// Ex:
document.addEventListener('DOMContentLoaded', function () {
    // All DOM elements are now ready
    let mydiv = document.getElementById('wrapper');
    mydiv.addEventListener('click', function(event) {
        if (event.target.nodeName === 'SPAN') {
            alert("You clicked on: " + event.target.textContent);
        }
    });
});

