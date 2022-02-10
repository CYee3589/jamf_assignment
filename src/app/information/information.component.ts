import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})

export class InformationComponent implements OnInit {

  temp: any = 'filler';
  // animalName = "sample";
  // detailList: any[] = [];

  url = 'https://mcxlmpfy3k.execute-api.us-east-1.amazonaws.com/dev/animals?animal=dog';
  animal: any = 'dog';

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.animal = this.route.snapshot.params['animal']
    this.getAnimalDetails();
  }

  getURL(){
    this.url = "https://mcxlmpfy3k.execute-api.us-east-1.amazonaws.com/dev/animals?animal="+this.animal;
  }

  getAnimalDetails(){
    // For getting
    this.getURL();

    this.httpClient.get(this.url).subscribe(
      response => {
        console.log(response);
      
        this.temp = response;
        // this.animalName = this.temp.animal;
        // this.detailList = this.temp.details;
      }
    );
  }

}
