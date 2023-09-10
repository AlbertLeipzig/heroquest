export interface IBeing {
  role: string;
  body: number;
  movePoints: number;
  attackPoints: number;
  defensePoints: number;
}

export interface IHero extends IBeing {
  heroId: string;
  fullName: string;
  equipment: string[];
  gold: number;
}

export interface IMonster extends IBeing {
  monsterId: string;
  frequency: number;
}

export interface INpc extends IBeing {
  npcId: string;
  fullName: string;
}

export interface CreaturesPageProps {
  creaturesData: (IHero | IMonster)[];
}

export interface IItem {
  itemId: string;
  itemName: string;
  type: string;
  effect: {
    type: string;
    amount: number;
  };
  description: string;
  cost: number;
  load: {
    location: string | null;
    amount: number;
  };
}

export interface IRoom {
  roomId: string;
  roomName: string;
  image: string;
  description: string;
  monsters: IMonster[];
  traps: ITrap[];
  treasure: ITreasure;
}

export interface ITrap {
  trapId: string;
  trapName: string;
  damage: number;
  description: string;
  discovered: boolean;
  disarmed: boolean;
}

export interface ITreasure {
  treasureId: string;
  treasureName: string;
  type: string;
  description: string;
  amount: number;
}

export interface IGameStatus extends IRoom {
  gameStatus: 'exploration' | 'combat' | 'finished';
}

export type possibleGameModes = 'exploration' | 'combat' | 'finished';
