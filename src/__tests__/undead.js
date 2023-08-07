import Undead from '../undead';

test('Test creating Undead', () => {
  const expectedUndead = {
    name: 'John',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const undead = new Undead('John');
  expect(undead).toEqual(expectedUndead);
});
