import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  users =[];

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.http.get('/api/users')
    .subscribe(response => this.users = response.json())

  }

}
