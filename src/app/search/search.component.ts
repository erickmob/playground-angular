import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private dataService: DataService) { }

  result: Object;

  ngOnInit() {
  }


  findByName(name:string){
    this.dataService.findByName(name).subscribe(data =>{
      this.result = data;
    });
  }
}
