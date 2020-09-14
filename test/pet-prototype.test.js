const Pet = require('../src/pet-prototype');

describe('constructor', () => {
  test('returns an object', () => {
    expect(new Pet('Kevin')).toBeInstanceOf(Object);
  });
});

describe('creates new pet with name', () => {
  test('sets the name property', () => {
    const pet = new Pet('kevin');
    expect(pet.name).toEqual('kevin');
  });
});

describe('initial age 0', () => {
  test('has a initial age of 0', () => {
    const pet = new Pet('Kevin');
    expect(pet.age).toEqual(0);
  });
});

describe('growUp', () => {
  test('increments the age by 1', () => {
    const pet = new Pet('Kevin');

    pet.growUp();

    expect(pet.age).toEqual(1);
  });
});

describe('hunger', () => {
  test('add 5 to hunger level', () => {
    const pet = new Pet('Kevin');

    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });
});

describe('fitness', () => {
  test('subtracts 3 from fitness when pet gets older', () => {
    const pet = new Pet('Kevin');

    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
});

describe('walk', () => {
  test('increases fitness to a maxium of 10', () => {
    const pet = new Pet('Kevin');
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});

describe('keeping fed', () => {
  test('calling feed should decrease the Pet\'s hunger level by 3', () => {
    const pet = new Pet('Kevin');
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });
  test('decreases hunger to minimum of 0', () => {
    const pet = new Pet('kevin');
    pet.hunger = 0;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
});

describe('checkUp', () => {
  test('returns I need a walk if fitness is less than 3', () => {
    const pet = new Pet('Kevin');
    pet.checkUp();
    pet.fitness = 3;
    expect(pet.checkUp()).toBe('I need a walk');
  });
  test('returns I am hungry if hunger is 5 or more', () => {
    const pet = new Pet('Kevin');
    pet.checkUp();
    pet.hunger = 5;
    expect(pet.checkUp()).toBe('I am hungry');
  });
  test('if fitness is less than 3 and hunger is 5 or more return string', () => {
    const pet = new Pet('Kevin');
    pet.checkUp();
    pet.fitness = 3;
    pet.hunger = 5;
    expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
  });
  test('if neither of the above are true, it should return I feel great!', () => {
    const pet = new Pet('Kevin');
    pet.checkUp();
    pet.fitness = 4;
    pet.hunger = 4;
    expect(pet.checkUp()).toBe('I feel great!');
  });
});
describe('checks if pet is alive or dead', () => {
  test('age greater or equal to 30', () => {
    const pet = new Pet('Kevin');
    pet.age = 30;
    expect(pet.isAlive).toEqual(false);
  });
  test('fitness is below zero results in death', () => {
    const pet = new Pet('Kevin');
    pet.fitness = -1;
    expect(pet.isAlive).toEqual(false);
  });
  test('hunger over 10 results in death', () => {
    const pet = new Pet('Kevin');
    pet.hunger = 11;
    expect(pet.isAlive).toEqual(false);
  });
});
describe('isAlive', () => {
  test('checks if the pet is below 30 and alive', () => {
    const pet = new Pet('Kevin');
    pet.age = 29;
    expect(pet.isAlive).toEqual(true);
  });
  test('checks if the pet is alive and has a fitness above zero', () => {
    const pet = new Pet('Kevin');
    pet.fitness = 1;
    expect(pet.isAlive).toEqual(true);
  });
  test('checks if the pet is alive and hunger is below 10', () => {
    const pet = new Pet('Kevin');
    pet.hunger = 8;
    expect(pet.isAlive).toEqual(true);
  });
});
describe('check we can make babies', () => {
  const parent = new Pet('Dave');
  const child = new Pet('Amelia');

  parent.adoptChild(child);

  test('check adding a child to a parent adds to the children array', () => {
    expect(parent.children).toHaveLength(1);
  });
  test('check adding a child to a parent adds to the children array', () => {
    expect(parent.children[0].name).toEqual('Amelia');
  });
});
