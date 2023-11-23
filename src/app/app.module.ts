import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ShowInfoComponent } from './pages/show-info/show-info.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// import { AuthModule } from '@auth0/auth0-angular';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ComponentModule } from './components/component.module';
// import dotenv from 'dotenv/config';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowInfoComponent,
    UserProfileComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    ComponentModule
    // AuthModule.forRoot({
    //   domain: '',
    //   clientId: ''
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
