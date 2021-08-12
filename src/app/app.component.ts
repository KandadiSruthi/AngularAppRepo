import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './app-store/models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  constructor(private appService: AppService) {}

  title = 'my-firstangular-app';

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    role:new FormControl('', Validators.required)
  });

  users: any[] = [];
  tmpusers:any[]=[];
  userCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
              //console.log(this.userForm.value);
              this.users=[];
    this.appService.addUser(this.userForm.value).subscribe(data => {
      console.log('message::::', data);
      this.userCount = this.userCount + 1;
      this.tmpusers.push(data);
      console.log(this.userCount);
      this.userForm.reset();
    });
  }

  getAllUsers() {
   this.users=this.tmpusers;
    //this.appService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((users) => {
       // this.users = data as UserModel;         
        // for(var usr in users)
        // {
        //   this.users.push(usr);
        // }
        //console.log(users);
    //});
  }
  

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}


