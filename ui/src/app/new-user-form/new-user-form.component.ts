import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  users: any;
  constructor(
      private http: Http
  ) { }

  ngOnInit() {
    this.http.get('/api/users')
    .toPromise()
    .then(response => this.users = response.json())

  }
  findWeather(zip){
     this.http.get('/api/users')
     .toPromise()
     // .then(response =>
     //   console.log(
     //   response.json()
     // )
     // )
     // .then(response => this.users = response.json())

     .catch(err => {
       console.log(err);
     });


   }

}
