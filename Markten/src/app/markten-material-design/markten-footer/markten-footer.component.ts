import { Component, Input, OnInit } from '@angular/core';
import MarktenText from '../utilities/markten-text'

@Component({
  selector: 'app-markten-footer',
  templateUrl: './markten-footer.component.html',
  styleUrls: ['./markten-footer.component.css'],
  providers: [MarktenText]
})
export class MarktenFooterComponent implements OnInit {

  @Input() name = "Aeson Delcroix";
  @Input("lives-in") livesIn = "Belgium"

  constructor(private marktenText: MarktenText) { }

  ngOnInit(): void {
    console.log(this.marktenText);
  }

}
