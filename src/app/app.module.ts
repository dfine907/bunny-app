import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BunnyProfileComponent } from './bunny-profile/bunny-profile.component';
import { MoreInfoComponent } from './more-info/more-info.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BunnyProfileComponent,
    MoreInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
