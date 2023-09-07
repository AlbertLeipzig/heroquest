import { IMonster } from '../interfaces';
import { Monster } from '../classes';
export const generateMonsters = (): IMonster[] => {
  const monsters: IMonster[] = [];

  monsters.push(new Monster('alskdj', 23, 23, 23, 1212, 12));
  return monsters;
};
