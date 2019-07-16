import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Pokemon} from '../pokemon';
import { PokemonDTO } from '../pokemon-dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemonList: Object;
  vai: JSON;
  public pokemonDto: PokemonDTO;
  public list: Array<Pokemon> = [];
  myPokemon: Pokemon;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.listAll().subscribe(data =>{

      // this.pokemonDto = data as PokemonDTO;
      // this.pokemonDto.results.forEach(element => {
      //   this.myPokemon = new Pokemon(element.name, element.url);
      //   this.list.push(this.myPokemon);
      // });


    this.list = data.results.map((element)=> new Pokemon(element.name, element.url));
    });

  }

}
