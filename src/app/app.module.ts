import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { MoreInfoComponent } from './more-info/more-info.component';
import { BunnyFormComponent } from './bunny-form/bunny-form.component';

import { BunnyListComponent } from './bunny-list/bunny-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BunnyModalComponent } from './bunny-modal/bunny-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    MoreInfoComponent,
    BunnyFormComponent,
    BunnyListComponent,
    NavbarComponent,
    BunnyModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
