import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { BunnyFormComponent } from './bunny-form/bunny-form.component';
import { DisplayCardComponent } from './display-card/display-card.component';
import { ListedCardsComponent } from './listed-cards/listed-cards.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoreInfoComponent,
    BunnyFormComponent,
    DisplayCardComponent,
    ListedCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
