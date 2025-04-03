// Window


// It is a global ibject which is top of the root element
// window is the top most thing in the hierchy
// where every method comes under/inside teh window
// Browser creates the window object


// DOM

// Document Object Model 

// 1. GetElementById

document.getElementById('firstpara')

// Output:
{/* <p id="firstpara">First Para</p> */}


// 2. GetElementByClassName

document.getElementsByClassName('Textmatter')

// Output:
// HTMLCollection 
//     []length: 
//     0[[Prototype]]: HTMLCollectionitem: 
//     ƒ item()length: (...)namedItem: 
//     ƒ namedItem()constructor:
//      ƒ HTMLCollection()Symbol(Symbol.iterator): 
//      ƒ values()Symbol(Symbol.toStringTag): 
//      "HTMLCollection"get length: 
//      ƒ length()[[Prototype]]: Object


// 3. GetElementByTagName:

document.getElementsByTagName('p')

// Output
// HTMLCollection(3) [p#firstpara.Textmatter, 
//     p#secoundtpara, p#Thirdpara,
//     firstpara: p#firstpara.Textmatter,
//     secoundtpara: p#secoundtpara, 
//     Thirdpara: p#Thirdpara]

// 4. QuerySelector: All The Previous 3 Methods Are Implemented In This Method

document.querySelector('p')

// Output
{/* <p id=​"firstpara" class=​"Textmatter">​First Para​</p>​ */}

document.querySelector('.Textmatter')

// Output
{/* <p id=​"firstpara" class=​"Textmatter">​First Para​</p>​ */}

// here you should observe that there many para class name textmatter but only the first para is taken others are ignored

// To avoid this we should take querryselector All()

// 5. querySelectorAll
document.querySelectorAll('p')

// Output:
// NodeList(3) [p#firstpara.Textmatter, 
//     p#secoundtpara, p#Thirdpara]0: 
//     p#firstpara.Textmatter1: 
//     p#secoundtpara2: 
//     p#Thirdparalength: 
//     3[[Prototype]]:
//      NodeList


// Another Method is used by $0

// First inspect the page then select the element you want then go to the console and write $0 you will get the exact element.


// Updating the existing element:
// 1. InnerHtml => can get and set the element of the html / tag which have some part of html inside it

// Get innerhtml

// $0
// <button class=​"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:​outline-none focus-visible:​ring-2 focus-visible:​ring-ring focus-visible:​ring-offset-2 disabled:​pointer-events-none disabled:​opacity-50 [&_svg]​:​pointer-events-none [&_svg]​:​size-4 [&_svg]​:​shrink-0 px-4 py-2 !p-3 !rounded-btn h-auto bg-indigo-600 hover:​bg-indigo-700 text-white undefined">​…​</button>​flex
// let button = $0
// undefined
// button
// <button class=​"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:​outline-none focus-visible:​ring-2 focus-visible:​ring-ring focus-visible:​ring-offset-2 disabled:​pointer-events-none disabled:​opacity-50 [&_svg]​:​pointer-events-none [&_svg]​:​size-4 [&_svg]​:​shrink-0 px-4 py-2 !p-3 !rounded-btn h-auto bg-indigo-600 hover:​bg-indigo-700 text-white undefined">​…​</button>​flex
// button.innerHTML
// '<p class="flex items-center justify-center gap-x-2 text-base font-medium px-2">View Courses</p>'

// Set innerhtml

// button.innerHTML = '<p>I am the King</p>';
// '<p>I am the King</p>'
// button.innerHTML
// '<p>I am the King</p>'


// 2. OuterHtml :The outerHTML property returns or sets the entire HTML of an element, including the element itself.

// Unlike innerHTML, which only modifies the content inside an element, outerHTML replaces the entire element.
// Modifying outerHTML removes the original element and replaces it with the new HTML.

// Example:

{/* <div id="box">Hello, World!</div> */}
<script>
  let box = document.getElementById("box");
  console.log(box.outerHTML); 
  // Output: <div id="box">Hello, World!</div>

  box.outerHTML = '<p id="new">New Element</p>';  
  console.log(document.getElementById("new")); // ✅ The div is replaced with a new paragraph
</script>

// Once an element is removed from the DOM using outerHTML, trying to access it will result in null.

// 3. text-content: The way you have wrritten in the code like how many enter you have clicked.
// Returns all text, including hidden content. Faster & preferred for performance.
// doesn't consider style so ot also takes the hidden data like span data

/* <div id="demo" style="display: none;">
    Hello <span>World</span>!
</div>

<script>
  let elem = document.getElementById("demo");

  console.log(elem.textContent); // ✅ Output: "Hello World!"
  console.log(elem.innerText);   // ❌ Output: "" (hidden content is ignored)
</script>
 */


// 4. innertext: The way Rendering of elements in UI takes place that way only innertext is visible.
// Returns only visible text (ignores display: none). Recalculates layout, so it's slower.

// let element = document.querySelector('#fdiv');
// undefined
// element
// <div id=​"fdiv">​…​</div>​
// element.textContent
// ' \n        \n            This Is My first\n            \n                Text\n            \n        \n        \n            This My Secound\n            \n        \n    '
// element.innerText
// 'This Is My first Text\n\nThis My Secound'

