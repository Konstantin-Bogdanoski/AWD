/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */

import Hero from "./class/Hero";
import NPC from "./class/NPC";

let npcs = [];
let heros = [];

//  Random number of agents (Heros/NPCs) from range (10, 50)
let numberOfAgents = (Math.floor(Math.random() * 50) + 10);

//Creation of entities
for (let i = 0; i < numberOfAgents; i++) {
    //if it's 1=>Hero, 0=>NPC
    let version = Math.round(Math.random());
    if (version === 1)
        heros.push(new Hero("Hero " + heros.length + 1));
    else
        npcs.push(new NPC("NPC " + npcs.length + 1))
}

//TODO: Draw them on screen