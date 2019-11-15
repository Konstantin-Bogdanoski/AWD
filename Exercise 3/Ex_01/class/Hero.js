/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */
import NPC from "./NPC";

class Hero extends NPC {
    damage;
    boost = 0;

    constructor(name, hp = 100, damage = 10) {
        super(id, name, hp);
        this.damage = damage;
    }

    attack(npc) {
        if (this.boost !== 0)
            npc.hp = npc.hp - this.damage * (this.boost / 100);
        else
            npc.hp = npc.hp - this.damage;
    }


    get boost() {
        return this._boost;
    }

    set boost(value) {
        this._boost = value;
    }
}

export default Hero;