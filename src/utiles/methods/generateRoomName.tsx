import roomNames from '../../data/roomNames-data.json';

export const generateRoomName = (): string => {
  const index = Math.floor(Math.random() * roomNames.length);
  return roomNames[index];
};
