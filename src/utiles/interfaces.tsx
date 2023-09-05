export interface IBeing {
  beingId: string;
  role: string;
  body: number;
  move: number;
  attack: number;
  defense: number;
}

export interface IHero extends IBeing {
  fullName: string;
  equipment: string[];
  gold: number;
}

export interface IMonster extends IBeing {}

export interface INpc extends IBeing {
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
  monsters: IMonster[];
  secretDoors: boolean;
  traps: boolean;
  treasures: boolean;
}
