export class Personaje{
    protected nombre: string;
    protected vida: number;
    protected mana: number;
    protected armadura: number;
    protected chanceEvadir:number;
    protected nivel: number;
    protected habilidadEspecial:string;
    constructor(nombre: string, vida: number, mana: number, armadura: number, chanceEvadir:number, nivel:number, habilidadEspecial:string){
        this.nombre = nombre;
        this.vida = vida;
        this.mana = mana;
        this.armadura = armadura;
        this.chanceEvadir = chanceEvadir
        this.nivel = nivel;
        this.habilidadEspecial = habilidadEspecial;
    }

    public getNombre(): string{
        return this.nombre;
    }
    public getVida(): number{
        return this.vida;
    }
    public getMana(): number{
        return this.mana;
    }
    public getArmadura(): number{
        return this.armadura;
    }
    public getChanceEvadir():number{
        return this.chanceEvadir;
    }

    public atacar():void{
        return console.log("Atacando");
    }
    public defender():void{
        return console.log("Defendiendo");
    }
}