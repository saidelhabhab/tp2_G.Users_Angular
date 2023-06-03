import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './elements/pages/users/list/user/user.component'
import { HomeComponent } from './elements/pages/home/home.component';


const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'users', component: UserComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
