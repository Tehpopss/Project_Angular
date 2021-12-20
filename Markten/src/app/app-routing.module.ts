import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMarktReactiveFormComponent } from './markten-material-design/add-markt-reactive-form/add-markt-reactive-form.component';
import { MarktenCardComponent } from './markten-material-design/markten-card/markten-card.component'

const routes: Routes = [
  {
    path: "add-markt",
    component: AddMarktReactiveFormComponent
  },
  {
    path: "markten-card",
    component: MarktenCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
