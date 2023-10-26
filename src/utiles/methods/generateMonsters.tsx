import { IMonster } from '../interfaces';
import monsterData from '../../data/monters.json';
import { rollMultipleDices } from './rollDices';
import { generateSingleMonster } from './generateSingleMonster';

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

  for (let i = 0; i < numberOfMonsters; i++) {
    const monster = generateSingleMonster();
    if (monster) {
      monstersArray.push(monster);
    }
  }

  return monstersArray;
};
