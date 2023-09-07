import { IHero, IMonster } from '../utiles/interfaces';
import { Hero, Monster } from '../utiles/classes';

import heroData from '../data/heroes.json';
import monstersData from '../data/monters.json';

const heroes: Hero[] = heroData.map((rawHero: IHero) => {
  return new Hero(rawHero);
});
const monsters = monstersData.map((monster: IMonster) => new Monster(monster));

export { heroes, monsters };
