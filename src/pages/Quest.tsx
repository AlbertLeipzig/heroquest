import roomData from '../data/room-data.json';
import monstersData from '../data/monters.json';

const findReferenceMonster = (monsterInputValue: string) => {
  return monstersData.find(
    (monster) => monster.monsterId === monsterInputValue
  );
};

const completeMonsterList = (monsterList: string[]) => {
  return monsterList.map((monster) => findReferenceMonster(monster));
};

const data = completeMonsterList(roomData.monsters);

export const Quest = () => {
  return (
    <div className="quest">
      <h1>{roomData.name}</h1>
      <img src={roomData.image} alt="" />
      <p>{roomData.description}</p>
      {data.map((monster) => (
        <>
          <p>{monster?.role}</p>
          <p>attack [{monster?.attack}]</p>
          <p>defense [{monster?.defense}]</p>
          <p>move [{monster?.move}]</p>
          <p>body [{monster?.body}]</p>
        </>
      ))}
    </div>
  );
};
