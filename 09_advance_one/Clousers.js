// Clousers In JS

// A clousers is the combination function and it's reqdata / surrunding state / lexical scope

// Nested Function
// A case where inside function is trying to get the value which is freezed from memory and it will get the 
// memory as the innerfunction is bined with the require data and we will get the data   

let name="Leni"
function outerfunction() {
    //   This is near then Leni
    let name = "Linga"; // name is a local variable created by outerfunction
    {
        // Available inside this block only
        let name = "Anni";
    }
    function innerfunction() {
      //  The inner function here forms a closure
      //   let name = "Abhi";  //  This is near then Linga,Leni
      console.log(name); // use variable declared in the parent function
    }
    return innerfunction;
  }
let inner = outerfunction();
inner();
