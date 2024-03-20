import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { BunnyFormComponent } from './bunny-form/bunny-form.component';

import { ListedCardsComponent } from './listed-cards/listed-cards.component';
import { BunnyListComponent } from './bunny-list/bunny-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoreInfoComponent,
    BunnyFormComponent,
    ListedCardsComponent,
    BunnyListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
