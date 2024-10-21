import { Personaje } from "./Personajes";
import { Guerrero } from "./Guerrero";
import { Arquero } from "./Arquero";
import { Mago } from "./Mago";
import { SubGuerrero } from "./subclaseGuerrero";
import { SubArquero } from "./subclaseArquero";
import { SubMago } from "./subclaseMago";


let personaje1=new Guerrero("Guerrero", 200, 100, 10, 5, 1, "Bloquear");
let personaje2=new Arquero("Arquero", 150, 120, 5, 20, 1, "Disparo doble");
let personaje3=new Mago("Mago", 100, 200, 1, 5, 1, "Bola de fuego");

personaje1.atacar();
console.log("Armadura: "+personaje2.getArmadura());
personaje3.defender();

personaje1=new SubGuerrero();

personaje1.defender();
console.log(personaje1.getVida());