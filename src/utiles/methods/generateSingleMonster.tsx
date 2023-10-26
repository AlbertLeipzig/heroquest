import { IMonster } from '../interfaces';
import monsterData from '../../data/monters.json';
import { rollMultipleDices } from './rollDices';

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
  }

  const monster = monsterData.find((monster) => monster.role === monsterRole);

  if (!monster) {
    // Handle the case where the monster is not found in the data
    // You can return a default monster or handle the error as needed
    return getDefaultMonster();
  }

  return monster;
};

// Define a function to return a default monster
function getDefaultMonster(): IMonster {
  // You can define your default monster data here
  // For example:
  return {
    monsterId: 'defaultMonsterId',
    frequency: 1,
    role: 'defaultMonsterRole',
    body: 10,
    movePoints: 3,
    attackPoints: 5,
    defensePoints: 3,
  };
}
