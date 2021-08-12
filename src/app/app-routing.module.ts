import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppService } from './app.service';

const routes: Routes = [
  {   
    path: 'http://localhost:4200/user',     
    redirectTo:'http://localhost:4200'
   },
  //  { 
  //   path: 'users', 
  //   component: UsersComponent
  //  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
