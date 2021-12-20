import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMarktReactiveFormComponent } from './markten-material-design/add-markt-reactive-form/add-markt-reactive-form.component';
import { MarktenCardComponent } from './markten-material-design/markten-card/markten-card.component';
import { MarktenGridListComponent } from "./markten-markten-material-design/markten-grid-list/markten-grid-list.component";

const routes: Routes = [
  {
    path: "add-markt",
    component: AddMarktReactiveFormComponent
  },
  {
    path: "markten-card",
    component: MarktenCardComponent
  }
  {
    path: "markten-grid",
    component: MarktenGridListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
