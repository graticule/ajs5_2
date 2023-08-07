import Character from '../character';
import Swordsman from '../swordsman';

test('Test creating Swordsman', () => {
  const swordsman = new Swordsman('John');
  expect(swordsman instanceof Swordsman).toBe(true);
  expect(swordsman instanceof Character).toBe(true);
  expect(swordsman.health).toBe(100);
  expect(swordsman.level).toBe(1);
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});
