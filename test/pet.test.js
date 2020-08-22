const Pet = require('../src/pet');


describe('constructor', () => {
    it('returns an object', () => {
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
    it('increments the age by 1', () => {
      const pet = new Pet('Kevin');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });
  });