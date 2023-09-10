import { Monster } from '../classes';
import { IMonster } from '../interfaces';
import monsterData from '../../data/monters.json';
import { rollMultipleDices } from './rollDices';

//  goblin          |   1   |   16  |   1
//  orc             |   2   |   08  |
//  fimir           |   4   |   04  |
//  skeleton        |   1   |   16  |
//  zombie          |   2   |   08  |
//  mummie          |   4   |   04  |
//  chaos warrior   |   8   |   02  |
//  gargoyle        |   16  |   01  |

export const generateSingleMonster = () => {
  const diceResult = Math.floor(Math.random() * 59);
  let monsterRole = '';
  if (diceResult < 17) {
    monsterRole = 'goblin';
  } else if (diceResult < 25) {
    monsterRole = 'orc';
  } else if (diceResult < 29) {
    monsterRole = 'fimir';
  } else if (diceResult < 45) {
    monsterRole = 'skeleton';
  } else if (diceResult < 53) {
    monsterRole = 'zombie';
  } else if (diceResult < 57) {
    monsterRole = 'mummy';
  } else if (diceResult < 59) {
    monsterRole = 'chaos warrior';
  } else if (diceResult < 60) {
    monsterRole = 'gargoyle';
  } else {
    monsterRole = '';
  }

  const monster = monsterData.find((monster) => monster.role === monsterRole);

  return monster;
};
