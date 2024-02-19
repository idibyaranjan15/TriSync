const myNums = [1, 2, 3]

 const newNums = myNums.reduce( (acc, currVal) => {
    console.log(`acc: ${acc} and currVal :${currVal}`);
    return acc + currVal }, 0 )

//  console.log(newNums);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 5999
    },
    {
        itemName: "cpp course",
        price: 9999
    },
    {
        itemName: "java course",
        price: 1999
    },
    {
        itemName: "backend course",
        price: 3999
    },
   
]

const newTotal =  shoppingCart.reduce((acc , item) =>(acc + item.price), 0)

console.log(newTotal);










