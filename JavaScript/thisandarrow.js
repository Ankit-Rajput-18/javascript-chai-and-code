const user = {
  username: "ankit",
  price: "544",
  welcomemessahge: function () {
    // console.log(`Welcome ${this.username} to the website`);
    // console.log(this) //current object ka  reference deta hai ya value ya uske andr jo hai sb
  },
};
// user.welcomemessahge()
// user.username ="anuj"
// user.welcomemessahge()
// console.log(this) global mein empty object hota hai

// function chai(){
//     let username = "Ankit"
//     console.log(this.username) // global object

// }
// chai() // global object

// +++++++++++++++++++++++++ arrow function +++++++++++++++

// const chai =  function(){
//     let username = "Ankit"
//     console.log(this) // ye this ke andr ki cheeje deta hai
// }
// chai() // global object

// const chai =  ()=>{
//     let username = "Ankit"
//     console.log(this) // ye empty object deta hai
// }
// chai()

// const addnumber = (a,b)=>{
//     return a+b
// }
// console.log(addnumber(2,3))

// const addnumber = (a,b)=> a + b;

// const addnumber = (a,b)=> (a + b);
const addnumber = (a, b) => ({ username: "Ankit" });

console.log(addnumber(2, 3));
