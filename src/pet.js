const maxFitness = 10;

class Pet {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10;
    }
    growUp(){
        this.age = this.age +1;
        this.hunger = this.hunger +5;
        this.fitness = this.fitness -3;
    }
    
        walk() {
            if ((this.fitness + 4) <= maxFitness ) {
                this.fitness += 4;
              } else {
                this.fitness = 10;
              }
            }
    


};
module.exports = Pet;
