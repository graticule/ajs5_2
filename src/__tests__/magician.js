import Magician from '../magician';

test('Test creating Magician', () => {
  const expectedMagician = {
    name: 'John',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const magician = new Magician('John');
  expect(magician).toEqual(expectedMagician);
});
