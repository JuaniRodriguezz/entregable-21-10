import { Personaje } from "./Personajes";
import { Mago } from "./Mago";

export class SubMago extends Mago{    
    constructor(){
        super("Mago", 150, 300, 3, 5, 2, "Lluvia de hielo");
    }
}