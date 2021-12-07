import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { MarktenToolbarComponent } from './markten-toolbar/markten-toolbar.component';
import { MarktenCardComponent } from './markten-card/markten-card.component';
import { MarktenFooterComponent } from './markten-footer/markten-footer.component';

@NgModule({
  declarations: [
    MarktenToolbarComponent,
    MarktenCardComponent,
    MarktenFooterComponent
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
