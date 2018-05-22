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
  public show:boolean = false;
  // public buttonName:any = 'Show';

  constructor(
    private userCardService: UserCardService
) { }

  ngOnInit() {
    this.userCardService.getAllUsers()
    .subscribe(response => this.users = response.json())

  }
deleteUser(userId){
  this.userCardService.deleteUser(userId)
  .subscribe((response) => {
      console.log('deleted gif');
    });

  const indexToRemove = this.users.findIndex((user) => {
  return user.id === userId;
});
this.users.splice(indexToRemove, 1);
}

editing(){
  this.show = !this.show;

  console.log(this.show);
//
//   // CHANGE THE NAME OF THE BUTTON.
//   if(this.show)
//     this.buttonName = "Hide";
//   else
//     this.buttonName = "Show";
// }
}
}
