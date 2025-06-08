const array = ["hello","nameste","konichiwa","hola"]

// let a  = array[0];

// // array.push("woah")
// array.unshift("woah")
// array.pop()
// array.shift()

// console.log(array)

let index = array.indexOf("nameste")
console.log(index)

for (let i = 0 ; i<array.length ;i++){
    console.log(array[array.length-i])
}

for (let i = array.length ; i>=0 ; i--){
    console.log(array[i])
}
// also in first for loop replace i by array.length - i

// shorthand
for ( let number of array ){
    console.log(number)
}