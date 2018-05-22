import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  users: any;
  constructor(
      private http: HttpClient
  ) { }

  ngOnInit() {


  }
  submitUser(fname, lname, phone){

    const req = this.http.post('/api/users', {
        userName: 'testUser',
        firstName: fname,
        lastName: lname

      })
        .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log("Error occured");
          }
        );

}

}
