let age = [24,35,67,24,86,45,46,1,4,6,7,76]


function adults( age){
    return age >= 18;
}

const adultsArry = age.filter(adults);

console.log(adultsArry)