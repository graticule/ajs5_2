import Zombie from '../zombie';

test('Test creating Zombie', () => {
  const expectedZombie = {
    name: 'John',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const zombie = new Zombie('John');
  expect(zombie).toEqual(expectedZombie);
});
