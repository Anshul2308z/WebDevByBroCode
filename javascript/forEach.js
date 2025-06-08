let number = [1,2,3]

number.forEach(tripple); // doubles all elements in array 
number.forEach(display);


function double(element,index,array){
    array[index]= element*2 ;
} 
function display(element){
console.log(element);} 

function tripple(element,index,array){
    array[index] = element*3;
}

let fruits = ["apple","banana","orange"];

function upperCase(element,index,array){
    array[index] = element.toUpperCase() ; 
}
function capatalize (element,index,array){
    array[index] = element.trim().charAt("0").toUpperCase() + element.trim().slice(1).toLowerCase();
}
fruits.forEach(capatalize);
fruits.forEach(display)