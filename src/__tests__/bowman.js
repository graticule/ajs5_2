import Bowman from '../bowman';
import Character from '../character';

test('Test creating Bowman', () => {
  const bowman = new Bowman('John');
  expect(bowman instanceof Bowman).toBe(true);
  expect(bowman instanceof Character).toBe(true);
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
});
