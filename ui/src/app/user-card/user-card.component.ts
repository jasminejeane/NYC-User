import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserCardService } from './user-card.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  users =[];

  constructor(
    private userCardService: UserCardService
) { }

  ngOnInit() {
    this.userCardService.getAllUsers()
    .subscribe(response => this.users = response.json())

  }

}
