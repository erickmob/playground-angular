export class Pokemon {
    name: string; 
    url: string;
    id: number;
    imgUrl: string;

    constructor(name:string, url:string){
        this.name = name;
        this.url = url;
        this.id = this.getPokemonId();
        this.imgUrl = this.createImgUrl();
    }

    getPokemonId(){
        return Number(this.url.split('/')[6]);
    }

    createImgUrl(){
        return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
        .concat(this.id.toString())
        .concat('.png');
    }
}
