import { Room } from '../utiles/classes';
import { IRoom } from '../utiles/interfaces';

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
  treasures: generateTreasures(),
};

const { roomId, roomName, image, description, monsters, traps, treasures } =
  roomData;

const room = new Room(
  roomId,
  roomName,
  image,
  description,
  monsters,
  traps,
  treasures
);

export const Quest = () => {
  return (
    <div className="quest">
      <h1>{room.roomName}</h1>
      <img src={room.image} alt="" />
      <p>{room.description}</p>
      <ul>
        {room?.traps.map((trap) => (
          <li key={String(new Date())}>{trap.trapName}</li>
        ))}
      </ul>
      <ul>
        {room?.treasures.map((treasure) => (
          <li key={String(new Date())}>
            {treasure.description} : {treasure.amount}
          </li>
        ))}
      </ul>
      <ul>
        {room?.monsters.map((monster) => (
          <li key={String(new Date())}>{monster.role}</li>
        ))}
      </ul>
    </div>
  );
};
