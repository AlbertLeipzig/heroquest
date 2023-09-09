import { IMonster } from '../interfaces';
import { generateMonsters } from './generateMonsters';
import { generateTraps } from './generateTraps';
import { generateTreasures } from './generateTreasures';
import { Room } from '../classes';
import { generateId } from '../methods/generateId';
import { generateRoomName } from './generateRoomName';
import { generateRoomImage } from './generateRoomImage';
import { generateRoomDescription } from './generateRoomDescription';



export const generateRoom = (): Room => {
  const roomId = generateId('room');
  const roomName = generateRoomName();
  const image = generateRoomImage();
  const monsters: IMonster[] = generateMonsters();
  const traps = generateTraps();
  const treasures = generateTreasures();
  const description = generateRoomDescription();

  const room = new Room(
    roomId,
    roomName,
    image,
    description,
    monsters,
    traps,
    treasures
  );

  return room;
};
