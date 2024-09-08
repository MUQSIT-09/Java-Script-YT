// // Summary(As I understood) :
// // We can use For of loop for values printing/for iterating over values directly over [[[[ Strings & Array  ]]]
// // We can use For in loop for values printing/for iterating over values by Indexes/Keys over Objects and Arrays & Strings .
// // We Can Use forEach loop For iterating {{Over Arrays}} and its values as well.
// // By using For of loop we can iterate maps also


const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val); // js, ruby, java, python, cpp
} )

// Using Arrow Function:
coding.forEach( (item) => {
    console.log(item); // js, ruby, java, python, cpp
} )

function printMe(item){
    console.log(item); // js, ruby, java, python, cpp
}
// If you have written the function anywhere else, here we are only giving the reference we are not executing
coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )
// Output: 
// Item:      Index:       Array:
// js         0          [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby       1          [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java       2          [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python     3          [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp        4          [ 'js', 'ruby', 'java', 'python', 'cpp' ]


// Used in database reterval: We will get mostly arrays from database and we can print particular property from that array.
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName); //javascript ,java ,python
} )


