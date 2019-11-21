/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */

class NPC {
    name;
    hp;

    constructor(name = "NPC", hp = 100) {
        this._name = name;
        this._hp = hp;
    }

    status() {
        return this.name + " - " + this.hp;
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
}