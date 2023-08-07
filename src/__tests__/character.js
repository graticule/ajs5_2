import Character from '../character';
import Bowman from '../bowman';

test('Test name is not a string', () => {
  const name = 1;
  const type = 'Bowman';
  expect(() => new Character(name, type)).toThrow(Error);
});

test.each([
  ['a'],
  ['abcdefghijk'],
])('Test name %s of wrong length', (name) => {
  const type = 'Bowman';
  expect(() => new Character(name, type)).toThrow(Error);
});

test.each([['bowman'], ['Bow man'], ['Killer']])('Test wrong type %s', (type) => {
  const name = 'John';
  expect(() => new Character(name, type)).toThrow(Error);
});

test('Test levelUp', () => {
  const bowman = new Bowman('John');
  let prevAttack = bowman.attack;
  let prevDefence = bowman.defence;
  bowman.health = 23;
  bowman.levelUp();
  expect(bowman.level).toBe(2);
  expect(bowman.attack).toBeCloseTo(prevAttack * 1.2, 5);
  expect(bowman.defence).toBeCloseTo(prevDefence * 1.2, 5);
  expect(bowman.health).toBe(100);
  prevAttack = bowman.attack;
  prevDefence = bowman.defence;
  bowman.health = 1;
  bowman.levelUp();
  expect(bowman.level).toBe(3);
  expect(bowman.attack).toBeCloseTo(prevAttack * 1.2, 5);
  expect(bowman.defence).toBeCloseTo(prevDefence * 1.2, 5);
  expect(bowman.health).toBe(100);
  prevAttack = bowman.attack;
  prevDefence = bowman.defence;
  bowman.health = 0;
  bowman.levelUp();
  expect(bowman.level).toBe(3);
  expect(bowman.attack).toBe(prevAttack);
  expect(bowman.defence).toBe(prevDefence);
  expect(bowman.health).toBe(0);
});

test('Test damage', () => {
  const bowman = new Bowman('John');
  bowman.damage(10);
  expect(bowman.health).toBeCloseTo(92.5, 5);
  bowman.damage(80);
  expect(bowman.health).toBeCloseTo(32.5, 5);
  bowman.damage(40);
  expect(bowman.health).toBeCloseTo(2.5, 5);
  bowman.damage(10);
  expect(bowman.health).toBe(0);
  bowman.damage(10);
  expect(bowman.health).toBe(0);
});