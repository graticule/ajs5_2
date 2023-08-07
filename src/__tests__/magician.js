import Character from '../character';
import Magician from '../magician';

test('Test creating Magician', () => {
  const magician = new Magician('John');
  expect(magician instanceof Magician).toBe(true);
  expect(magician instanceof Character).toBe(true);
  expect(magician.health).toBe(100);
  expect(magician.level).toBe(1);
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});
