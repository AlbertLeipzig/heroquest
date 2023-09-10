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
import { generateId } from './methods/generateId';

export class Being implements IBeing {
  constructor(
    public role: string,
    public body: number,
    public movePoints: number,
    public attackPoints: number,
    public defensePoints: number
  ) {}

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

export class Hero extends Being {
  public heroId: string;
  public fullName: string;
  public equipment: string[];
  public gold: number;

  constructor(hero: IHero) {
    const { role, body, movePoints, attackPoints, defensePoints } = hero;
    super(role, body, movePoints, attackPoints, defensePoints);
    {
    }
    this.heroId = hero.heroId;
    this.fullName = hero.fullName;
    this.equipment = hero.equipment;
    this.gold = hero.gold;
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
  scape(target: IBeing): void {
    scape(target);
  }
}

export class Monster extends Being {
  public monsterId: string;
  public frequency: number;
  constructor(monster: IMonster) {
    const { role, body, movePoints, attackPoints, defensePoints } = monster;

    super(role, body, movePoints, attackPoints, defensePoints);
    {
      this.monsterId = generateId('monster');
      this.frequency = monster.frequency;
    }
  }
  chase(target: IBeing): void {
    chase(target);
  }
}

export class Npc extends Being {
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

export class Room {
  constructor(
    public roomId: string,
    public roomName: string,
    public image: string,
    public description: string,
    public monsters: IMonster[],
    public traps: ITrap[],
    public treasure: ITreasure
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

export class Item  {
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

export class Trap  {
  constructor(
    public trapId: string,
    public trapName: string,
    public damage: number,
    public description: string,
    public discovered: boolean,
    public disarmed: boolean
  ) {}
}

export class Treasure  {
  constructor(
    public treasureId: string,
    public treasureName: string,
    public type: string,
    public description: string,
    public amount: number
  ) {}
}
