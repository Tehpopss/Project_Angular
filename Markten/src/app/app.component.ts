import { Component } from '@angular/core';
import { Markten } from "./markten-material-design/markten-footer/markten-footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Markten';

  printMarkt(markt: Markten){
    console.log(markt);
  }
}
