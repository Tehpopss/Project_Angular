import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MarktenMaterialDesignModule } from './markten-material-design/markten-material-design.module';

import { AppHttpCallsModule } from './app-http-calls/app-http-calls.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarktenMaterialDesignModule,
    AppHttpCallsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
