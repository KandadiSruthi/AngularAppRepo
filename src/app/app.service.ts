import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  }from '@angular/common/http';
import { User } from './app-store/models';
import { Observable } from 'rxjs';
import { UserModel } from './app-store/models/user.model';
import { map } from 'rxjs/operators';
// import { formatDate, getLocaleDateFormat } from '@angular/common';
// import { dateReviver } from 'ngrx-store-localstorage';
// import {User} from './app-store/models'
// import { InMemoryDbService } from 'angular-in-memory-web-api';

// import { Observable, throwError } from 'rxjs';
// import { tap, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
    this.http=http;
  }

  URL = 'https://reqres.in/api/MytstAng';


 
  addUser(user: User) {
    return this.http.post<User>(this.URL, {
      //user
      firstName:user.firstName,
      lastName:user.lastName,
      email:user.email,
      address:user.address
    });
  }

}
