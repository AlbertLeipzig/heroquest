import { Room } from '../utiles/classes';

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
    <div className="quest">
      <h1>{room.roomName}</h1>
      <img src={room.image} alt="" />
      <p>{room.description}</p>
      <ul>
        {room?.traps.map((trap) => (
          <li key={trap.trapId}>{trap.trapName}</li>
        ))}
      </ul>
      <ul>
        {room?.treasure && (
          <div key={treasure.treasureId}>
            <h3>{treasure.treasureName}</h3>
            <p>{treasure.type}</p>
            <p>{treasure.description}</p>
            <p>{treasure.amount}</p>
          </div>
        )}
      </ul>
      <ul>
        {room?.monsters.map((monster) => (
          <li key={monster.monsterId}>{monster.role}</li>
        ))}
      </ul>
    </div>
  );
};
