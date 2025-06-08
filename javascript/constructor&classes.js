// this is contructor variable 

function car (make,model,year,color){
    this.make = make ,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new car("ford","Mustang",2024,"red");

console.log(car1.model)

// a better way 

class Product{
    constructor(name,price){
        this.name = name ,
        this.price = price
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price : ${this.price}`)
    }
    static hello(){
        console.log("hello ");
    }
}

const product = new Product ("pen" , 20);

console.log(product)
console.log(product.name)
console.log(product.price)

