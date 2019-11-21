/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */

class NPC {
    name;
    hp;

    constructor(name = "NPC", hp = 100) {
        this.name = name;
        this.hp = hp;
    }

    status() {
        return this.name + " - " + this.hp;
    }

    get name() {
        return this.name;
    }

    get hp() {
        return this.hp;
    }

    set hp(value) {
        this.hp = value;
    }
}

class Hero extends NPC {
    damage;
    boost = 0;

    constructor(name = "HERO", hp = 100, damage = 10) {
        super(name, hp);
        this.damage = damage;
    }

    attack(npc) {
        //NPC is Hero
        if (npc instanceof Hero) {
            if (this.boost > 0 && npc.hp - this.damage * (this.boost / 100) > 0) {
                npc.hp = npc.hp - this.damage * (this.boost / 100);
                npc.boost = this.boost;
                this.boost = 0;
            } else
                npc.hp = npc.hp - this.damage;
        }
        //NPC is NPC
        else if (this.boost !== 0)
            npc.hp = npc.hp - this.damage * (this.boost / 100);
        else
            npc.hp = npc.hp - this.damage;
    }


    get boost() {
        return this.boost;
    }

    set boost(value) {
        this.boost = value;
    }
}
let npcs = [];
let heroes = [];

//  Random number of agents (Heros/NPCs) from range (10, 50)
let numberOfAgents = (Math.floor(Math.random() * 50) + 10);
//Creation of entities
for (let i = 0; i < numberOfAgents; i++) {
    //if it's 1=>Hero, 0=>NPC
    let version = Math.round(Math.random());
    if (version === 1)
        heroes.push(new Hero("Hero " + (heroes.length + 1)));
    else
        npcs.push(new NPC("NPC " + (npcs.length + 1)));
}
//Assign critical hit
let randomHero = (Math.floor(Math.random() * (heroes.length - 1)));
//Assign boost value
heroes[randomHero].boost = 150;

console.info("HEROES:");
console.table(heroes);

console.info("NPCS:");
console.table(npcs);
let win = false;

//Attack until we have a winner
while (heroes.length > 0 || npcs.length > 0) {
    //Check WIN condition
    if (npcs.length <= 0 && heroes.length === 1) {
        win = true;
        break;
    } else if (npcs.length > 0 && heroes.length <= 0)
        break;
    //Hero to attack
    let randomHero = (Math.floor(Math.random() * (heroes.length - 1)));
    let choice = Math.round(Math.random());
    //Attack Hero
    if (choice === 1) {
        let randomNPC = (Math.floor(Math.random() * (heroes.length - 1)));
        if (heroes[randomNPC] !== undefined) {
            heroes[randomHero].attack(heroes[randomNPC]);
            if (heroes[randomNPC].hp <= 0)
                heroes = heroes.filter(npc => {
                    return npc.hp > 0;
                });
        }
    }
    //Attack NPC
    else {
        let randomNPC = (Math.floor(Math.random() * (npcs.length - 1)));
        //To remove the excess numbers
        if (npcs[randomNPC] !== undefined) {
            heroes[randomHero].attack(npcs[randomNPC]);
            if (npcs[randomNPC].hp <= 0)
                npcs = npcs.filter(npc => {
                    return npc.hp > 0;
                });
        }
    }
}

if (win)
    console.log("WINNER: " + heroes[0].name + ", HP: " + heroes[0].hp + " | Heroes length: " + heroes.length);
else
    console.error("HEROES LOST!");