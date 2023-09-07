import { IRoom, IMonster, possibleGameModes } from '../utiles/interfaces';
import { Room } from '../utiles/classes';
let presentRoom: IRoom = {} as IRoom;
let presentMonsters: IMonster[] = [];

/* 
  roomId: string;
  roomName: string;
  image: string;
  description: string;
  monsters: string[];
  traps: boolean;
  treasures: boolean;
  generateMonsters(): IMonster[];
  generateTraps(): ITrap[];
  generateTreasures(): ITreasure[];
*/

const defineRoom = (): void => {
  console.log('define room function');

  const roomId = String(new Date());
  const roomName = 'Test Name';
  const image =
    'https://images.unsplash.com/photo-1571989601904-c1b26bb0f25a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVuZ2VvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';
  const description =
    'alsdkjasldkj asldkja sdlkja sdlkajsd laksjd alskdj alskdj asldkjas d';

  const room = new Room(
    roomId,
    roomName,
    image,
    description,
    monsters,
    traps,
    treasures
  );
  // create new Room instance
  // define monsters
  // monsters ? gameStatus = "combat" : heroDecissions()
  // search for traps
  // search for treassures
  // enter a new room
};

const heroPhase = async (sentence: string) => {
  return new Promise((resolve) => {
    console.log(sentence);
    resolve(sentence);
  });
};

const morcarPhase = () => {
  console.log('Morcar Phase');
};

const startQuest = async () => {
  let gameStatus: possibleGameModes = 'exploration';
  if (gameStatus === 'exploration') {
    defineRoom();
  }
  try {
    await heroPhase('hero phase');
    morcarPhase();
    gameStatus = 'finished';
  } catch (e) {
    console.error(e);
    throw new Error(e instanceof Error ? e.message : 'An error ocurred');
  }
};
