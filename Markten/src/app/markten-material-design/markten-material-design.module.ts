import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { MarktenToolbarComponent } from './markten-toolbar/markten-toolbar.component';
import { MarktenCardComponent } from './markten-card/markten-card.component';
import { MarktenFooterComponent } from './markten-footer/markten-footer.component';

import { MarktenDataService } from "src/app/data-services/markten-data.service";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { AddMarktReactiveFormComponent } from './add-markt-reactive-form/add-markt-reactive-form.component';
import { MarktenGridListComponent } from './markten-grid-list/markten-grid-list.component';

@NgModule({
  declarations: [
    MarktenToolbarComponent,
    MarktenCardComponent,
    MarktenFooterComponent,
    AddMarktReactiveFormComponent,
    MarktenGridListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers:[MarktenDataService],
  exports: [
    MarktenToolbarComponent,
    MarktenCardComponent,
    MarktenFooterComponent,
    AddMarktReactiveFormComponent
  ]
})
export class MarktenMaterialDesignModule { }
