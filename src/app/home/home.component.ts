import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  li: any;
  lis=[];
  currentSpecies='';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAnimal();
  }

  clickGetSpecies(_animal: string){
    this.currentSpecies = _animal;
  }

  getAnimal(){
    // For getting
    this.httpClient.get('https://mcxlmpfy3k.execute-api.us-east-1.amazonaws.com/dev/animals').subscribe(
      response => {
        console.log(response);
        this.li = response;
        this.lis = this.li.animals;
      }
    );
  }

}
