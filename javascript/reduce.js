const arry = [1,2,3,4,5,6,7,8,9];

const max = arry.reduce(getMax);

function getMax(accumilator , element){
    return Math.max(accumilator,element);
}
console.log(max)