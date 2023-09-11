import { IMonster } from '../interfaces';
import { Monster } from '../classes';
import { rollMultipleDices } from './rollDices';
import { generateId } from './generateId';
import monsterData from '../../data/monters.json';

const generateSingleMonsterData = (): IMonster => {
  const monster = monsterData[rollMultipleDices(2)];

  const {
    monsterId,
    frequency,
    role,
    body,
    movePoints,
    attackPoints,
    defensePoints,
  } = monster;

  const singleMonsterData: IMonster = new Monster({
    monsterId,
    frequency,
    role,
    body,
    movePoints,
    attackPoints,
    defensePoints,
  });

  return singleMonsterData;
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
