class Animal{
    alive = true ;

    eat(){
        console.log(`This ${this.name} eats a bunch.`)
    }
    breathe(){
        console.log(`This ${this.name} breathes in O2.`)
    }
}

class fish extends Animal {
    thisname = "fish" ;
}

const goldfish = new fish( );
console.log(fish.eat())



// revieww!!!