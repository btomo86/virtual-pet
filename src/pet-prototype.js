const maxFitness = 10;
const minimumHunger = 0;
const maxAge = 30;
const maxHunger = 10;
const minimumFitness = 0;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = minimumHunger;
  this.fitness = maxFitness;
  this.children = [];
}
Pet.prototype = {
  get isAlive() {
    return this.age < maxAge && this.hunger < maxHunger && this.fitness > minimumFitness;
  },
};

Pet.prototype.growUp = function () {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  this.age = +1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  if ((this.fitness + 4) <= maxFitness) {
    this.fitness += 4;
  } else {
    this.fitness = maxFitness;
  }
};
Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  if ((this.hunger - 3) <= minimumHunger) {
    this.hunger = minimumHunger;
  } else {
    this.hunger -= 3;
  }
};
Pet.prototype.checkUp = function () {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
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
};

Pet.prototype.adoptChild = function(pet) {
  this.children.push(pet);
};

module.exports = Pet;
