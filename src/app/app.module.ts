import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './elements/pages/home/home.component';
import { MenuComponent } from './elements/menu/menu.component';
import { HeaderComponent } from './elements/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { UsersService } from './services/users.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './elements/pages/users/list/user/user.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    UserComponent
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot(
    {
      defaultLanguage :'en',
      loader: { 
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]

    }}
    ),
   
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory (http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}
