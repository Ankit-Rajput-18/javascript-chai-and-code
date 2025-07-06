const accountId = 14451
let acccountEmail= "ankit@google.com"
var accountPassword="12345" // global mein declare kra aur fir local mein toh local ki 
// value le lega mtlb jo bad mein aayega uski value lega iske liye global aur local kuch nhi hai
accountCity = "kanpur"
// accountId =2
// var ka use isiliye jyada nhi krte hai kyuki uski value change hoti
//  rhti hai isiliye let ka use krte hai
console.log(accountId)
console.table([accountId, acccountEmail, accountPassword, accountCity])