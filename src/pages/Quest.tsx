import roomData from '../data/room-data.json';
export const Quest = () => {
  return (
    <div className="quest">
      <h1>{roomData.name}</h1>
      <img src={roomData.image} alt="" />
      <p>{roomData.description}</p>
      {roomData.monsters.map((monster) => (
        <p>{monster.name}</p>
      ))}
    </div>
  );
};
