import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ShowInfoComponent } from './pages/show-info/show-info.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthModule } from '@auth0/auth0-angular';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
// import dotenv from 'dotenv/config';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowInfoComponent,
    UserProfileComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: '',
      clientId: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
