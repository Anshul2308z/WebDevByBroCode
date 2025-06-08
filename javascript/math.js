const PI =Math.PI;
const E = Math.E;
const SQRT2 = Math.SQRT2;

let x =3.21 ;
let y = 4.56;
let z ,w;

z= Math.round(x);
console.log(z); 

z= Math.ceil(x); //round up
console.log(z);

w= Math.floor(y);//round down
console.log(w);

z=Math.trunc(x); //round towards zero : truncate
console.log(z);

z=Math.pow(x,y); //x^y
console.log(z);
console.log(Math.sqrt(x)); //square root
console.log(Math.abs(x)); //absolute value: positive

// also : sin(); cos() ;tan(); log() 

// Math.sign(x)

// min & max

const a = 3;
const b = 4;
const c = 5;

let max = Math.max(a,b,c);
let min = Math.min(a,b,c);

console.log(max,min);