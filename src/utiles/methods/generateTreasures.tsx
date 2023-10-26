import { ITreasure } from '../interfaces';
import { Treasure } from '../classes';
import { rollMultipleDices } from './rollDices';
import allTreasureData from '../../data/treasure-data.json';

const defaultTreasure: ITreasure = {
  treasureId: '',
  treasureName: '',
  type: '',
  description: '',
  amount: 0,
};

export const generateTreasures = (): ITreasure => {
  const rollResult = rollMultipleDices(3);

  if (rollResult > 12) {
    const treasureData = allTreasureData[rollResult - 11];
    
    if (treasureData) {
      const { treasureId, treasureName, type, description, amount } = treasureData;
      const treasure = new Treasure(
        treasureId,
        treasureName,
        type,
        description,
        amount
      );
      
      return treasure;
    }
  }

  // If no valid treasure is found or rollResult is <= 12, return defaultTreasure
  return defaultTreasure;
};
