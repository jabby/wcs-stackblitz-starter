import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WcsAngularModule } from 'wcs-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { HomeComponent } from './components/home.component';
import { NavComponent } from './components/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WcsAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
