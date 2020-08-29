const Pet = require('../src/pet');

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
