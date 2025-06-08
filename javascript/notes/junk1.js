const numbers = [1,2,3,4,5];

const square = numbers.map((element)=>{
    return Math.pow(element,2)})

const cube = numbers.map((element)=>{return Math.pow(element,3)});
// console.log(square);


function spreadSqr (){
    let arry = [];
    for(let i = 0 ; i<numbers.length;i++){
        let sqrd = numbers[i]*numbers[i]
        arry.push(sqrd)
    }
    return arry ;
}
const result = spreadSqr();
console.log(result)

















// const students = ["ram","lakshman","bharat","shatrughan"]

// const upperCase = students.map((element)=>{
//     return element.toUpperCase();
// })
// const capatalize = students.map((element)=>{
//     return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
// })
// console.log(upperCase)

// console.log(capatalize)