import Daemon from '../daemon';

test('Test creating Daemon', () => {
  const expectedDaemon = {
    name: 'John',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const daemon = new Daemon('John');
  expect(daemon).toEqual(expectedDaemon);
});
