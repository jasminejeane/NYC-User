import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class UserCardService {

constructor(private http: Http) {}

  getAllUsers(){
    return this.http.get('/api/users');
  }
}
