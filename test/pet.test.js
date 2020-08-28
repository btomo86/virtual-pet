const Pet = require('../src/pet');


describe('constructor', () => {
    test('returns an object', () => {
        expect(new Pet('Kevin')).toBeInstanceOf(Object);
    });
});

describe('constructor', () => {
    test('sets the name property', () => {
        const pet = new Pet('kevin');
        expect(pet.name).toEqual('kevin');
    });
});

describe('constructor', () => {
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
      })
  })
  
  describe('fitness', () => {
      test('subtracts 3 from fitness when pet gets older', () =>{
        const pet = new Pet('Kevin');
     
        pet.growUp();
        expect(pet.fitness).toEqual(7);
      })
  })

  describe('walk', () => {
      test('increases fitness to a maxium of 10', () => {
          const pet = new Pet('Kevin');
          pet.walk();
          expect(pet.fitness).toEqual(10);
      })
  })