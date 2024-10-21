import { Personaje } from "./Personajes";
import { Guerrero } from "./Guerrero";

export class SubGuerrero extends Guerrero{    
    constructor(){
        super("Guerrero", 300, 100, 15, 5, 2, "Bloqueo mejorado");
    }

    public defender():void{
        return console.log("Defendiendo a melee con escudo mejorado");
    }
}