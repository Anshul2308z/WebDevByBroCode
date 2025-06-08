const array =[1,9,2,8,3,7,4,6,5,10]

// array.sort((a,b)=>b-a)
array.sort ((a,b)=>a-b)

console.log(array)

// for sorting strings 

const fruits = ['banana',"apple", "orange","pineapple"]

fruits.sort((a,b)=>a.localeCompare(b));

console.log(fruits)
