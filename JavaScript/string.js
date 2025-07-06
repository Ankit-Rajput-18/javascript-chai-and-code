const name = "ankit"
let age = 24
console.log(name + "age" + age + "years old");
console.log(`My name is ${name} and I am ${age} years old`);
// template literals ka use krte hai jisme backticks use hote hai
// template literals mein variables ko ${} ke andar likhte hai
// template literals mein multiline string likh sakte hai
const about = `My name is ${name} and I am ${age} years old I am a software developer.`;
console.log(about);
// template literals mein string interpolation hoti hai jisme variables ko directly use kar sakte hai
// template literals mein expressions ko bhi use kar sakte hai
const gameName = new String("cricket");
console.log(gameName[0]);
// string object ko bhi use kar sakte hai jisme new keyword use karte hai
// string object mein bhi string methods use kar sakte hai
console.log(gameName.__proto__);