import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb(){
    return{
      users:[
        {
           firstName: "abc",
        lastName: "XYZ",
        email: "abc.xyz@gmail.com"
      },
      {
        firstName: "A",
     lastName: "Z",
     email: "a.z@gmail.com"
   }
      ]
    };
  }
}
