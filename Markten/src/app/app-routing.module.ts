import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMarktComponent } from './markten-material-design/add-markt/add-markt.component';
import { MarktenCardComponent } from './markten-material-design/markten-card/markten-card.component'

const routes: Routes = [
  {
    path: "add-markt",
    component: AddMarktComponent
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
