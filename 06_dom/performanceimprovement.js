
// Performance Improvements In JS:

// Performance.now:
// Tells you exactly how many milliseconds have passed since the page started loading.

// code 1
const t1 = performance.now();
for(let i=0;i<100;i++){
    let para = document.createElement('p');
    para.textContent = "This is para"+(i+1);
    document.body.appendChild(para);
}
const t2 = performance.now();

console.log("The Time Taken By Code1:"+(t2-t1));

// code 2

const t3 = performance.now();
let mydiv = document.createElement('div');
for(let i=0;i<100;i++){
    let para = document.createElement('div');
    para.textContent = "This is para"+(i+1);
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
const t4 = performance.now();

console.log("The Time Taken By Code2:"+(t4-t3));

// code2 is faste then code1
// Why?
// Because of resolve and repaint

// Reflow (or Layout/Resolve): 
// Process of calculating the position and dimension which element you want to render in the page 
// The browser figures out where and how big each element should be on the page.
// Requires more time as it is highly computational 

// Repaint: 
// Process of diplaying the Element pixel by pixel
// The browser fills in colors, text, and styles on the screen.
// Faster then reflow

// The reflow and repaint should be the least then only performance will comes out its best.


// Code 2 is faster then code1 because all the paras 1 to 100 are first append to the div then div is append to the body in the code2,
// where as in the code1 all 1 to 100 paras are appending one after another in the documnets that's why it takes more time

// In code 1 ==> 100 reflow and repaint, as everytime it is reflected to the UI 
// In code 2 ==> 1 reflow and 1 repaint, as all paras are first append to the div and div is append at last to the document 
//  after the paras are appended


// Best/Good practice:
// Document Fragment:
// It is a lightweight DOM structure used to store DOM nodes temporarily
// It is a lightweight document object which doesn't take reflow and repaint for appending elements.
// But when you add this document fragment to teh document then we require 1 reflow and 1 repaint

let fragment = document.createDocumentFragment();

for(let i=0;i<100;i++){
    let para = document.createElement('p');
    para.textContent = "This is para"+(i+64)+" Leni";
    // No Reflow And Repaint For The Below Line
    fragment.appendChild(para);
}
// 1 Reflow And Repaint For The Below Line
document.body.appendChild(fragment);
