import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus :boolean = false;
  currentLang:string | undefined;


   constructor( public translate:TranslateService){

    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);

   }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  SideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }


  changeCurrentLang(lang:string){
    this.translate.use(lang);
    localStorage.setItem('currentLang',lang);

  }

}
