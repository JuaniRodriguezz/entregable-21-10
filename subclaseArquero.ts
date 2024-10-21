import { Personaje } from "./Personajes";
import { Arquero } from "./Arquero";

export class SubArquero extends Arquero{    
    constructor(){
        super("Arquero", 200, 150, 8, 25, 2, "Disparo perforante");
    }
}