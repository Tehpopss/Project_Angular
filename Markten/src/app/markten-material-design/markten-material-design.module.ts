import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { MarktenToolbarComponent } from './markten-toolbar/markten-toolbar.component';
import { MarktenCardComponent } from './markten-card/markten-card.component';

@NgModule({
  declarations: [
    MarktenToolbarComponent,
    MarktenCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports: [
    MarktenToolbarComponent,
    MarktenCardComponent
  ]
})
export class MarktenMaterialDesignModule { }
