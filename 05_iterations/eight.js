
//  Reduce method have accumilator and current value
//  Where first accumilator don't know it's value so it is consider with 0 value 
//  (or) you can any value at last after curly braces and before paranthesis by keeping ,(value).
//  then after the first iteration, accumilator = accumilator + current value from the array.  

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0) // Here accumilator is set with 0 as initial value.

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal); //22996


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay); //22996


// Real Life Example:
// Imagine you have a bunch of toys in a basket, and you want to do different things with them:

// Reduce: Finally, imagine you want to find the total number of toys in the basket. 
// You would count one toy at a time, adding the count to a running total. 
// Reduce does something similar. It takes a function that combines two toys and reduces the collection to a single value. 
// In our case, it would add the count of each toy to a running total until there are no more toys left.
// So, reduce helps you aggregate or combine values into a single result.           