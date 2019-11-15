/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */

class NPC {
    static idCounter = 1;
    static radius = 20;
    id;
    name;
    hp;

    color;

    constructor(name, hp = 100) {
        this._id = NPC.idCounter++;
        this._name = name;
        this._hp = hp;
    }

    status() {
        return this.name + " - " + this.hp;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get hp() {
        return this._hp;
    }

    set hp(value) {
        this._hp = value;
    }

    get radius() {
        return NPC.radius;
    }
}

export default NPC;