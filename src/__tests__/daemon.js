import Character from '../character';
import Daemon from '../daemon';

test('Test creating Daemon', () => {
  const daemon = new Daemon('John');
  expect(daemon instanceof Daemon).toBe(true);
  expect(daemon instanceof Character).toBe(true);
  expect(daemon.health).toBe(100);
  expect(daemon.level).toBe(1);
  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(40);
});
