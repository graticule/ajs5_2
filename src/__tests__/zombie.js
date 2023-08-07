import Character from '../character';
import Zombie from '../zombie';

test('Test creating Zombie', () => {
  const zombie = new Zombie('John');
  expect(zombie instanceof Zombie).toBe(true);
  expect(zombie instanceof Character).toBe(true);
  expect(zombie.health).toBe(100);
  expect(zombie.level).toBe(1);
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
});
