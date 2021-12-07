import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { MarktenToolbarComponent } from './markten-toolbar/markten-toolbar.component';
import { MarktenCardComponent } from './markten-card/markten-card.component';
import { MarktenFooterComponent } from './markten-footer/markten-footer.component';

import { MarktenDataService } from "src/app/data-services/markten-data.service";

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
  providers:[MarktenDataService],
  exports: [
    MarktenToolbarComponent,
    MarktenCardComponent,
    MarktenFooterComponent,
  ]
})
export class MarktenMaterialDesignModule { }
