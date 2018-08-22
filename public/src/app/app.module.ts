import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadComponent } from './head/head.component';
import { RegistrationComponent } from './registration/registration.component';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
=======
import {  HttpClientModule } from '@angular/common/http';
>>>>>>> 9d84a100375b7b58b9c4f8041948f32bcba30633


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HeadComponent,
    RegistrationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
