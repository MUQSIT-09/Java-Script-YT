// Applying DOM In CSS

// 1.Style

// Applying style tag - get and set
// The drawback is that it is inline style only taht means multuple properties can't be set at a time

// The HTML Structure:

<body>
    <div id="fdiv" class="shah rukh"  style="background-color: aqua;padding: 2rem;">
        first div 
        <p id-fpara style="color: green;padding: 1rem;">first para</p>
        <div id="sdiv" style="background-color: rgb(223, 226, 15);padding: 1.2rem;">
            secound div
            <p id="spara" style="background-color: rgb(133, 31, 227);padding: 0.8rem;">
                secound para
            </p>
        </div>
    </div>
</body>

/*
    let paraelement = document.querySelector('#spara');
    undefined
    paraelement.style
    CSSStyleDeclaration {0: 'background-color', 1: 'padding-top', 2: 'padding-right', 3: 'padding-bottom', 4: 'padding-left', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
    paraelement.style.backgroundColor = 'yellow';
    'yellow'
*/

// 2. CSStext

// Multiple styles can we set at a time together

/*
    let spara=document.querySelector('#spara');
    undefined
    spara.style.cssText
    'background-color: yellow; padding: 0.8rem;'
    spara.style.cssText = "background-color:black,padding:1rem;color:white"
    'background-color:black,padding:1rem;color:white'
*/

// 3. SetAttribute:

// yOu can add any kind of attribute like class,style,id etc and the previous attribute is replaced with teh new ome
// Ex: If any kimd of style is updated so then all the pther style properties is removed and replaced with the new one.
//     If you were having bg-color,font-size and you have update only bg-color so then the font-size will we automatically removed.

/*
    let mydiv = document.querySelector('#spara');
    undefined
    mydiv.setAttribute('class','secoundpara');
    undefined
    mydiv 
    <p id=​"spara" style=​"color:​ white;​" class=​"secoundpara">​ secound para ​</p>​

*/

// 4. ClassName

// If we want to get, set, overwrite teh class name then it is used:

/*
    let classname = document.querySelectorAll('#fdiv');
    undefined
    fdiv.className
    'shah rukh'
    fdiv.className = 'lenga anni'
    'lenga anni'
    fdiv.className
    'lenga anni'
*/

// 5. ClassList

// Has multiple functionalities like get-array/list,toogle,add,remove,contains(check)
// toggle = if present it will remove, if not then will be added

/* 
        let fdiv = document.querySelector('#fdiv');
        undefined
        fdiv
        <div id=​"fdiv" class=​"lenga anni" style=​"background-color:​ aqua;​padding:​ 2rem;​">​…​</div>​
        fdiv.classList
        DOMTokenList(2) ['lenga', 'anni', value: 'lenga anni']
        fdiv.classList.add('khan');
        undefined
        fdiv.classList
        DOMTokenList(3) ['lenga', 'anni', 'khan', value: 'lenga anni khan']
        fdiv.classList
        DOMTokenList(3) ['lenga', 'anni', 'khan', value: 'lenga anni khan']0: "lenga"1: "anni"2: "khan"length: 3value: "lenga anni khan"[[Prototype]]: DOMTokenList
        fdiv.classList.remove('anni');
        undefined
        fdiv.classList.toggle('lenga')
        false
        fdiv.classList.toggle('lenga')
        true
        fdiv.classList
        DOMTokenList(2) ['khan', 'Khan', value: 'khan Khan']
        fdiv.classList.toggle('lenga')
        true
        fdiv.classList
        DOMTokenList(3) ['khan', 'Khan', 'lenga', value: 'khan Khan lenga']
        fdiv.classList.contains('lenga');
        true
*/






