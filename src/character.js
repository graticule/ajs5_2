export default class Character {
  constructor(name, type) {
    const types = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('name must have 2-10 symbols');
    }
    if (!types.includes(type)) {
      throw new Error('wrong type');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 10;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('cannot level up dead character');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
