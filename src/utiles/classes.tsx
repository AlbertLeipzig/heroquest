import {
  IBeing,
  IMonster,
  IHero,
  INpc,
  IRoom,
  IItem,
  ITrap,
  ITreasure,
} from './interfaces';

import { addToEquipment } from './methods/addToEquipment';
import { attack } from './methods/attack';
import { buyItem } from './methods/buyItem';
import { chase } from './methods/chase';
import { deductGold } from './methods/deductGold';
import { defense } from './methods/defense';
import { disarmTraps } from './methods/disarmTraps';
import { gainBodyPoints } from './methods/gainBodyPoints';
import { generateMonsters } from './methods/generateMonsters';
import { generateTraps } from './methods/generateTraps';
import { generateTreasures } from './methods/generateTreasures';
import { loseBodyPoints } from './methods/loseBodyPoints';
import { scape } from './methods/scape';
import { getTreasure } from './methods/getTreasure';
import { searchTraps } from './methods/searchTraps';
import { searchTreasure } from './methods/searchTreasure';

export class Being implements IBeing {
  constructor(
    public role: string,
    public body: number,
    public movePoints: number,
    public attackPoints: number,
    public defensePoints: number
  ) {}
  scape(target: IBeing): void {
    scape(target);
  }
  chase(target: IBeing): void {
    chase(target);
  }
  attack(target: IBeing): void {
    attack(target);
  }
  defense(target: IBeing): void {
    defense(target);
  }
  loseBodyPoints(amount: number): void {
    loseBodyPoints(amount);
  }
}

export class Hero extends Being implements IHero {
  private gameStatusUpdater : (status : possibleGameModes) => void;
  constructor(
    public heroId: string,
    public fullName: string,
    public equipment: string[],
    public gold: number,
    role: string,
    body: number,
    movePoints: number,
    attackPoints: number,
    defensePoints: number,
    gameStatusUpdater : (status : possibleGameModes) => void;
  ) {
    super(role, body, movePoints, attackPoints, defensePoints);
    this.gameStatusUpdater = gameStatusUpdater;
  }
  searchTraps(currentRoom: IRoom): void {
    searchTraps(currentRoom);
  }
  searchTreasure(currentRoom: IRoom): void {
    searchTreasure(currentRoom);
  }
  disarmTraps(currentRoom: IRoom): void {
    disarmTraps(currentRoom);
  }
  getTreasure(currentRoom: IRoom): void {
    getTreasure(currentRoom);
  }
  buyItem(item: IItem): void {
    buyItem(item);
  }
  deductGold(item: IItem): void {
    deductGold(item);
  }
  addToEquipment(item: IItem): void {
    addToEquipment(item);
  }
  gainBodyPoints(amount: number): void {
    gainBodyPoints(amount);
  }
  exitGame(): void {
    this.gameStatusUpdater("finished")
  }
}

export class Monster extends Being implements IMonster {
  constructor(
    public monsterId: string,
    role: string,
    body: number,
    movePoints: number,
    attackPoints: number,
    defensePoints: number
  ) {
    super(role, body, movePoints, attackPoints, defensePoints);
  }
}

export class Npc extends Being implements INpc {
  constructor(
    public npcId: string,
    public fullName: string,
    role: string,
    body: number,
    movePoints: number,
    attackPoints: number,
    defensePoints: number
  ) {
    super(role, body, movePoints, attackPoints, defensePoints);
  }
}

export class Room implements IRoom {
  constructor(
    public roomId: string,
    public roomName: string,
    public image: string,
    public description: string,
    public monsters: string[],
    public traps: boolean,
    public treasures: boolean
  ) {}
  generateMonsters(): IMonster[] {
    return generateMonsters();
  }
  generateTraps(): ITrap[] {
    return generateTraps();
  }
  generateTreasures(): ITreasure[] {
    return generateTreasures();
  }
}

export class Item implements IItem {
  constructor(
    public itemId: string,
    public itemName: string,
    public type: string,
    public effect: {
      type: string;
      amount: number;
    },
    public description: string,
    public cost: number,
    public load: {
      location: string | null;
      amount: number;
    }
  ) {}
}

export class Trap implements ITrap {
  constructor(
    public trapId: string,
    public trapName: string,
    public damage: number,
    public discovered: boolean,
    public disarmed: boolean
  ) {}
}

export class Treasure implements ITreasure {
  constructor(
    public treasureId: string,
    public description: string,
    public amount: number
  ) {}
}
