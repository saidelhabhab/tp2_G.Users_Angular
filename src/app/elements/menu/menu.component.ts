import { Component, Input, OnInit } from '@angular/core';
import {HomeComponent} from 'src/app/elements/pages/home/home.component'
import { UserComponent } from '../pages/users/list/user/user.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  implements OnInit{

  @Input() sideNavStatus: boolean= false;
  list =[
    {
      number:'1',
      name: 'Home',
      icon:'fa-solid fa-house',
      component: ''

    },
    {
      number:'2',
      name: 'Users',
      icon:'fa-solid fa-user',
      component: 'users'
    },
  ]
  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}