export interface IBeing {
  beingId: string;
  role: string;
  body: number;
  move: number;
  attack: number;
  defense: number;
}
export interface IMonster extends IBeing {
  monsterId: string;
  beingId: never;
}

export interface IHero extends IBeing {
  heroId: string;
  beingId: never;
  fullName: string;
  equipment: string[];
  gold: number;
}

export interface INpc extends IBeing {
  npcId: string;
  beingId: never;
  fullName: string;
}

export interface IItems {
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
  secretDoors: boolean;
  traps: boolean;
  treasures: boolean;
}
