class Heroi{

    nome: string
    especie: string
    classe: string
    ocupacao: string
    forca: number
    agilidade: number
    ataque: number
    defesa: number
    inteligencia: number
    precisao: string
    alcanceAtaque: string
    alvoAtaque: string
    elementos: string

    constructor(
        nome:string,
        especie: string,
        classe: string,
        ocupacao: string,
        forca: number,
        agilidade: number,
        ataque: number,
        defesa: number,
        inteligencia: number,
        precisao: string,
        alcanceAtaque: string,
        alvoAtaque: string,
        elementos: string,
    ){
        this.nome= nome
        this.especie = especie
        this.classe = classe
        this.ocupacao = ocupacao
        this.forca = forca
        this.agilidade = agilidade
        this.ataque = ataque
        this.defesa = defesa
        this.inteligencia = inteligencia
        this.precisao = precisao
        this.alcanceAtaque = alcanceAtaque
        this.alvoAtaque = alvoAtaque
        this.elementos = elementos

    }
}

let heroi1 = new Heroi('Anglave','humano','espadachim','espadachis mágico', 300, 600, 1200, 800, 700, 'alta', 'curto,medio', 'aéreo,terrestre', 'caos')
let heroi2 = new Heroi('Lênia','elfa','arqueira','arueira mágica', 100,1300,500,400,900,'alta+','medio,longo','aéreo,terrestre','vento,luz' )