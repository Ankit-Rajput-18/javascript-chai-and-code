 const mynumber =  [1,2,5,6,7,8,9,12,13]
const newnums  = mynumber.map((nums)=>  nums * 12 )
// console.log(newnums);

// const myCoding = []
// mynumber.forEach((nums)=> 
//     {
//       let f =   nums*10

//     console.log(f)
// })

// const newnumss  = mynumber
// .map((nums)=> nums * 10 )
// .map(nums => nums + 5)
// .filter(nums => nums > 50)
// console.log(newnumss);


//++++++++++++++++++++++++++ reduce +++++++++++++++++++++++++++++++


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


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
const totalprice = shoppingCart.reduce((acc , nums)=> acc + nums.price , 0 )
console.log(totalprice);