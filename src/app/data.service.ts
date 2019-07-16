import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonDTO} from '../app/pokemon-dto'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  listAll(){
    return this.http.get<PokemonDTO>('https://pokeapi.co/api/v2/pokemon');
  }

  findByName(name:string){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'.concat(name));
  }
}
