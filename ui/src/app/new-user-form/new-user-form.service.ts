import {Component, Input, OnInit, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../types/user';


@Injectable()
export class NewUserFormService {

  constructor(private httpClient: HttpClient) {
  }

}
