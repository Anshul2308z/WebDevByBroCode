// spread operator

let numbers = [1,2,3,4,5,6]
console.log(...numbers)
let max = Math.max(...numbers);
console.log(max)

let username = "Anshul"

let letters = [...username].join(" ");
// let letters = [...username];

console.log(letters)

const arry = [...letters, ...numbers]
console.log(arry)

// rest parameters

function add(...numbers){
    let result = 0 ;
    for(number of numbers){
    result += number;}
    console.log(`sum is ${result}`)
}
function average(...numbers){
    let result = 0 ;
    for(number of numbers){
    result += number;
}
    console.log(`avg is ${result/numbers.length}`)
}

add(1,2,3,4,5)

average(1,2,3,4,5)