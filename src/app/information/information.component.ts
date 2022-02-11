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
  url = 'https://mcxlmpfy3k.execute-api.us-east-1.amazonaws.com/dev/animals?animal=dog';
  animal: any = 'dog';

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
      // Sets the animal of choice into class variable "animal"
    this.animal = this.route.snapshot.params['animal']
    this.getAnimalDetails();
  }

  // Sets the url based class variable
  setURL(){
    this.url = "https://mcxlmpfy3k.execute-api.us-east-1.amazonaws.com/dev/animals?animal="+this.animal;
  }

  // Fetches object of animal details from the web service 
  getAnimalDetails(){
    this.setURL();

    this.httpClient.get(this.url).subscribe(
      response => {
        console.log(response);
        this.temp = response;
      }
    );
  }

}
