const Pet = require('../src/pet');


describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });

  describe('constructor',() => {
      test('sets the name property',() => {
          const pet = new Pet('kevin');
          expect(pet.name).toEqual('kevin');
      })

  })