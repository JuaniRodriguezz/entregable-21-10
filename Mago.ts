import { Personaje } from "./Personajes";

export class Mago extends Personaje{
    constructor(nombre: string, vida: number, mana: number, armadura: number, chanceEvadir:number, nivel:number, habilidadEspecial:string){
        super(nombre, vida, mana, armadura, chanceEvadir, nivel, habilidadEspecial);
    }

    public setVida(vida: number): void{
        if(vida<100 && vida>0){
            this.vida = vida;
        }
    }
    public setMana(mana: number): void{
        this.mana = mana;
    }
    public setArmadura(armadura: number): void{
        this.armadura = armadura;
    }
    public setChanceEvadir(chanceEvadir: number): void{
        this.chanceEvadir = chanceEvadir;
    }

    public atacar():void{
        return console.log("Atacando con magia");
    }
    public defender():void{
        return console.log("Defendiendo con magia");
    }
}