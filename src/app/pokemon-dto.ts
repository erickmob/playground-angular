import {Pokemon} from '../app/pokemon'

export class PokemonDTO {
    count: number;
    next: string; 
    previous: string;
    results: Pokemon[];
}
