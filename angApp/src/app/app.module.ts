import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrationModule } from './administration/administration.module';
import { LoginSystemModule } from './login-system/login-system.module';
import { Page01Component } from './page01/page01.component';
import { UserinterfaceModule } from './userinterface/userinterface.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    Page01Component,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AdministrationModule,
    LoginSystemModule,
    UserinterfaceModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
