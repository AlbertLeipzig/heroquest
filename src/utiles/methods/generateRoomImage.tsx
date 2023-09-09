import roomImageData from '../../data/allItems-data.json';

export const generateRoomImage = (): string => {
  const index = Math.floor(Math.random() * roomImageData.length);

  return roomImageData[index];
};
