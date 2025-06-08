const email = "nemaanshul42@gmail.com";

const firstName = email.slice(0,email.indexOf("@"));
const lastName = email.slice(email.indexOf("@")+1);

console.log(firstName)
console.log(lastName)



// schema for slice 

// string.slice ( starting point , ending point] 
//                  inclusive       exclusive 