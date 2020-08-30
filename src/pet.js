const maxFitness = 10;
const minimumHunger = 0;
const maxAge = 30;
const maxHunger = 10;
const minimumFitness = 0;

class Pet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = minimumHunger;
    this.fitness = 10;
  }

  get isAlive() {
    return this.age < maxAge && this.hunger < maxHunger && this.fitness > minimumFitness;
  }

  growUp() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  }

  walk() {
    if ((this.fitness + 4) <= maxFitness) {
      this.fitness += 4;
    } else {
      this.fitness = maxFitness;
    }
  }

  feed() {
    if ((this.hunger - 3) <= minimumHunger) {
      this.hunger = minimumHunger;
    } else {
      this.hunger -= 3;
    }
  }

  checkUp() {
    if (this.hunger >= 5 && this.fitness <= 3) {
      return 'I am hungry AND I need a walk';
    }

    if (this.fitness <= 3) {
      return 'I need a walk';
    }

    if (this.hunger >= 5) {
      return 'I am hungry';
    }

    return 'I feel great!';
  }
}

module.exports = Pet;
