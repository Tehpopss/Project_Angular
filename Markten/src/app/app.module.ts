import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MarktenMaterialDesignModule } from './markten-material-design/markten-material-design.module';
import { MarktenFooterComponent } from './markten-material-desing/markten-footer/markten-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MarktenFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarktenMaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
