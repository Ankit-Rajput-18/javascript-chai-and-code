   // shallow copy tmhara original array ko change  krta hai
   //deep copy tmhara original array ko change nhi krta hai
 // array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)   akhriri mein add hota hai
// myArr.push(7)
// myArr.pop()  akhirir se delete hota hai

// myArr.unshift(9)  start mein add hota hai fir sare number shift hote hai
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //original array mein chnage nhi hota hai

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  //// splice changes the original array
// splice removes the elements from the original array and returns them
console.log("C ", myArr);
console.log(myn2);