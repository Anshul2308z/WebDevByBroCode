
/*
Implicit Conversion (done by JS engine automatically) :

let result = "5" * 2;   // 10 → string is converted to number
let result = "5" + 2;   // "52" → number is converted to string (concatenation)
*/

//Explicit Conversion (you manually convert)

console.log(

Number("123"),      // → 123
String(456),      // → "456"
Boolean(0)         // → false

)

/*
Useful Conversion Techniques: 
    Number(), parseInt(), parseFloat() → convert strings to numbers
    String() or .toString() → number to string
    Boolean() → anything to true/false
    + unary operator → quick way to convert string to number
*/

