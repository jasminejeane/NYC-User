import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  weather: any; //add the public property here

  constructor(
      private http: Http
  ) { }

  findWeather(zip){
     this.http.get('/api/users')
     .toPromise()
     .then(response => console.log(
       response.json()
     )
     )
     // .then(response => this.weather = response.json()); // use it here
   }


  ngOnInit() {
  }

}
