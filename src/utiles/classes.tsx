import { IBeing, IMonster, IHero, INpc, IRoom, IItem, ITrap, ITreasure } from './interfaces';

export class Being implements IBeing {
  constructor(
    public role: string,
    public body: number,
    public move: number,
    public attack: number,
    public defense: number
  ) {}
}

export class Hero extends Being implements IHero {
    constructor(
      public heroId: string,
      public fullName: string,
      public equipment: string[],
      public gold: number,
      role: string,
      body: number,
      move: number,
      attack: number,
      defense: number
    ) {
        super(role, body, move, attack, defense)
    }
  }


export class Monster extends Being implements IMonster {
  constructor(
    public monsterId: string,
    role: string,
    body: number,
    move: number,
    attack: number,
    defense: number

    ) {
        super(role, body, move, attack, defense)
  }
}

export class Npc extends Being implements INpc {
  constructor(
    public npcId: string,
    public fullName: string,
    role: string,
    body: number,
    move: number,
    attack: number,
    defense: number) {
        super(role, body, move, attack, defense)
    }
}

export class Room implements IRoom {
    constructor(
        public roomId : string,
        public roomName : string,
        public image : string,
        public description : string,
        public monsters : string[],
        public traps : boolean,
        public treasures : boolean;
        ){}
}

export class Item implements IItem {
    constructor(
        public itemId : string,
        public itemName : string,
        public type : string,
        public effect : {
            type : string,
            amount : number
        },
        public description : string,
        public cost : number,
        public load : {
            location : string | null,
            amount : number
        }

    ){}
}

export class Trap implements ITrap {
    constructor(
        public trapId : string,
        public trapName : string,
        public damage : number,
        public discovered : boolean,
        public disarmed : boolean
    ){}
}

export class Treasure implements ITreasure {
    constructor(
        public treasureId : string,
        public description : string,
        public amount : number
    ){}
}