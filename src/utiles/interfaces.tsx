export interface IBeing {
  role: string;
  body: number;
  movePoints: number;
  attackPoints: number;
  defensePoints: number;
  scape(target: IBeing): void;
  chase(target: IBeing): void;
  attack(target: IBeing): void;
  defense(target: IBeing): void;
  loseBodyPoints(amount: number): void;
}

export interface IHero extends IBeing {
  heroId: string;
  fullName: string;
  equipment: string[];
  gold: number;
  searchTraps(currentRoom: IRoom): void;
  searchTreasure(currentRoom: IRoom): void;
  disarmTraps(currentRoom: IRoom): void;
  getTreasure(currentRoom: IRoom): void;
  buyItem(item: IItem): void;
  deductGold(item: IItem): void;
  addToEquipment(item: IItem): void;
  gainBodyPoints(amount: number): void;
  exitGame(): void;
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
  generateMonsters(): IMonster[];
  generateTraps(): ITrap[];
  generateTreasures(): ITreasure[];
}

export interface ITrap {
  trapId: string;
  trapName: string;
  damage: number;
  discovered: boolean;
  disarmed: boolean;
}

export interface ITreasure {
  treasureId: string;
  description: string;
  amount: number;
}

export type possibleGameModes = 'exploration' | 'combat' | 'finished';