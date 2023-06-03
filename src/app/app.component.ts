import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestion_utilisateur-tp2';
  sideNavStatus: boolean= false;
  currentLang:string | undefined;

  constructor( public translate:TranslateService){
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);
  }

  changeCurrentLang(lang:string){
    this.translate.use(lang);
    localStorage.setItem('currentLang',lang);

  }
}
