class Animal {
    constructor(name,age){
     this.name = name ;
     this.age = age;
    }
}

class rabbit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age)
        this.runSpeed = runSpeed
    } 
}

class Hawk extends Animal{
    constructor(name,age,flySpeed){
        super(name,age)
        this.flySpeed = flySpeed ;
    }
}
