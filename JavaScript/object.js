// singleton apne trh ka ek hi hota hai
const mysym = Symbol("key1")
// object lieterals
const jUser = {
    name: "Ankit",
     age: 22,
     [mysym]: "Ankit", // ye symbol ko key ke trh use krta hai
     "full name": "Ankit Rajput",
     location: "Delhi",
        isLoggedIn: false,
        lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
        email:"ankitrajput@google.com",
    }
    // console.log(jUser.name); // Ankit
    // console.log(jUser["name"]); // Ankit
    // console.log(jUser["full name"]); //  ab isko dot se nhi krt skte hai  isko bracket se hi krna hoga
    // console.log(mysym); // Ankit
    // console.log(jUser[mysym]); // Ankit
    // console.log(jUser);
    jUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
jUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

jUser.ankit = function(){
    console.log("Hello JS user");
}
jUser.ankittwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(jUser.greeting());
console.log(jUser.ankit);
// console.log(jUser.greetingTwo);
// console.log(jUser.greetingTwo());
