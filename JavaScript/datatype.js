"use strict";// ab sari new cheeje likhni hongi code main sare modules keywords sb kuch
//alert(3+3);ye browser mein krte hai nodejs mein nhi
// console.log(3+3); // ye nodejs mein krte hai
//tc39 and mdn
let name = "hello"; 
let age =54
// null ek standlone value hai
// kis trh data access krte aur memory mein store hota hai uss hisab se do types mein hai primitive and non primitive
// primitive data types: string, number, boolean, null, undefined, symbol, bigint
// non primitive data types: object, array, function, date, regex, map, set   ye stack mein jate hai
// primitive call by value hote hai jisme copy data milta hai  ye heap mein
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log( id);
console.log( anotherId);

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
// let a = 8.2
// let b = 2.3
// let c = a + b
// console.log(c);

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3