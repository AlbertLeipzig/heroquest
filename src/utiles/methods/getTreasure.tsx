import { IRoom, ITreasure } from '../interfaces';
import { Treasure } from '../classes';

export const getTreasure = (currentRoom: IRoom): ITreasure => {
  const treasure = new Treasure(String(new Date()), 'test description', 12);

  return treasure;
};
