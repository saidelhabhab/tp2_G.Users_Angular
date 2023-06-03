import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  
  sideNavStatus: boolean= false;
  constructor(public translate:TranslateService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 

}
