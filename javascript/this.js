// this.something denotes something within the object you are currently in 
 

class Animal {
    constructor(name,age){
        this.name = name ;
        this.age= age
    }
}

const cheetah = new Animal("cheetah", 20)
// argument gets to animal class and this.name = "cheetah" here name is an obj level variable

console.log(cheetah)