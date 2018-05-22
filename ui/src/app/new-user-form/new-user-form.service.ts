import {Component, Input, OnInit, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../types/user';


@Injectable()
export class NewUserFormService {

// @Input() firstName;
// @Input() lastName;

  constructor(private httpClient: HttpClient) {
  }

  // addNewUser(gif) {
  //   return this.httpClient.post<User>(
  //     '/api/users',
  //     {
  //       firstName: ,
  //       lastName:
  //       // url: gif.images.fixed_width.url
  //     }
  //   );
  // }


}
