import { Component, OnInit,Input } from '@angular/core';
import { User } from '../app-store/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() 
  { 
    this.users=[];
  }
  @Input() users: any[];

  ngOnInit(): void {
  }

}
