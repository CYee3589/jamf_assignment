import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  temp: any;
  animals=[];
  currentSpecies='';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAnimal();
  }

  // Gets animal upon button click
  clickGetSpecies(_animal: string){
    this.currentSpecies = _animal;
  }

  // Fetches list of animals from the web service 
  getAnimal(){
    this.httpClient.get('https://mcxlmpfy3k.execute-api.us-east-1.amazonaws.com/dev/animals').subscribe(
      response => {
        console.log(response);
        this.temp = response;
        this.animals = this.temp.animals;
      }
    );
  }

}
