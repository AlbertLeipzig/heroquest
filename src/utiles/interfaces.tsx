export interface IBeing {
  role: string;
  body: number;
  move: number;
  attack: number;
  defense: number;
}

export interface IHero extends IBeing {
  heroId: string;
  fullName: string;
  equipment: string[];
  gold: number;
}

export interface IMonster extends IBeing {
  monsterId: string;
}

export interface INpc extends IBeing {
  npcId: string;
  fullName: string;
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
  monsters: string[];
  traps: boolean;
  treasures: boolean;
}

export interface ITrap {
  trapId: string;
  trapName: string;
  damage: number;
  discovered: boolean;
  disarmed: boolean;
}


export interface ITreasure {
  treasureId : string;
  description : string;
  amount : number;
}