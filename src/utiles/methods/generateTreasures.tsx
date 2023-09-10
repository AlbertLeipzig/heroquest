import { Treasure } from '../classes';
import { ITreasure } from '../interfaces';
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
  const treasureData =
    rollResult > 12 ? allTreasureData[rollResult - 11] : defaultTreasure;

  const { treasureId, treasureName, type, description, amount } = treasureData;

  const treasure = new Treasure(
    treasureId,
    treasureName,
    type,
    description,
    amount
  );

  return treasure;
};
