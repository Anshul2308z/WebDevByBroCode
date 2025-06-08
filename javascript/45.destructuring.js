
// swapping variable values

let a = 1 ;
let b = 2 ;

[a , b ] = [b , a ]

console.log(a,b)

// swapping array

let colors = ["red","green","blue","black","white"];

[colors[0],colors[4]] = [colors[4],colors[0]];

console.log(colors)  

// asign array elements to variables 

const [firstColor, secondColor ,thirdColor, ...otherColors ] = colors;

console.log(otherColors)

// extract values from obj

const person1 ={
    firstName : "Druv",
    secondName : "Rathe" ,
    age : 23 ,
    job: "youtuber"
}
const person2 ={
    firstName : "Anthony",
    secondName : "rogers" ,
    age : 18 
}

const { firstName ,lastName, age , job ="unemployed"} = person2;

//destructure in func parameters ( done in jsx if u remember)

function displayPerson ({firstName, lastName , age, job="undefined"}){
    console.log(`name : ${firstName} ${lastName}.`);
    console.log(`job : ${job}`)
}
