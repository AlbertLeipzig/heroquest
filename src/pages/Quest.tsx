import { Room } from '../utiles/classes';
import { DecissionDialog } from '../components/DecissionDialog';

import {
  generateId,
  generateMonsters,
  generateRoomDescription,
  generateTraps,
  generateTreasures,
  generateRoomName,
  generateRoomImage,
} from '../utiles/methods/methods-barrel';

const roomData = {
  roomId: generateId('room'),
  roomName: generateRoomName(),
  image: generateRoomImage(),
  description: generateRoomDescription(),
  monsters: generateMonsters(),
  traps: generateTraps(),
  treasure: generateTreasures(),
};

const { roomId, roomName, image, description, monsters, traps, treasure } =
  roomData;

const room = new Room(
  roomId,
  roomName,
  image,
  description,
  monsters,
  traps,
  treasure
);

export const Quest = () => {
  return (
    <div id={room.roomId} className="room">
      <h1>{room.roomName}</h1>
      <img src={room.image} alt="" className="image_horizontal" />
      <p>{room.description}</p>
      <DecissionDialog />
      <ul>
        {room?.monsters.map((monster) => (
          <li key={monster.monsterId}>
            <div className="monster__stats">
              <h3>{monster.role}</h3>
              <p>{monster.body} BP</p>
              <p>{monster.attackPoints} AP</p>
              <p>{monster.defensePoints} DP</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
