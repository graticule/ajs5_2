import Bowman from '../bowman';

test('Test creating Bowman', () => {
  const expectedBowman = {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const bowman = new Bowman('John');
  expect(bowman).toEqual(expectedBowman);
});
