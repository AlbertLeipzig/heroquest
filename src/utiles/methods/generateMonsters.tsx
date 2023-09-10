import { IMonster } from '../interfaces';
import { Monster } from '../classes';
import { rollMultipleDices } from './rollDices';
import monsterData from '../../data/monsters.json';
import { generateId } from './generateId';

const generateSingleMonsterData = (): IMonster => {
  const randomMonsterData: IMonster = {
    monsterId: generateId('monster'),
    role: 'Monster',
    body: 10,
    movePoints: 3,
    attackPoints: 5,
    defensePoints: 4,
    frequency: 0,
  };
  return randomMonsterData;
};

export const generateMonsters = (): IMonster[] => {
  const monstersArray: IMonster[] = [];
  const rollResult = rollMultipleDices(2);
  let numberOfMonsters = 0;

  if (rollResult < 5) {
    numberOfMonsters = 0;
  } else if (rollResult < 6) {
    numberOfMonsters = 1;
  } else if (rollResult < 8) {
    numberOfMonsters = 2;
  } else if (rollResult < 9) {
    numberOfMonsters = 3;
  } else if (rollResult < 11) {
    numberOfMonsters = 4;
  } else if (rollResult < 12) {
    numberOfMonsters = 5;
  } else {
    numberOfMonsters = 0;
  }

  // Generate monsters and push them into the array
  for (let i = 0; i < numberOfMonsters; i++) {
    const singleMonsterData = generateSingleMonsterData();
    const monster = new Monster(singleMonsterData);
    monstersArray.push(monster);
  }

  return monstersArray;
};
