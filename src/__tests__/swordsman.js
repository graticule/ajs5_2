import Swordsman from '../swordsman';

test('Test creating Swordsman', () => {
  const expectedSwordsman = {
    name: 'John',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const swordsman = new Swordsman('John');
  expect(swordsman).toEqual(expectedSwordsman);
});
