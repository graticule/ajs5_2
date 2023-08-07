import Character from '../character';
import Undead from '../undead';

test('Test creating Undead', () => {
  const undead = new Undead('John');
  expect(undead instanceof Undead).toBe(true);
  expect(undead instanceof Character).toBe(true);
  expect(undead.health).toBe(100);
  expect(undead.level).toBe(1);
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
});
