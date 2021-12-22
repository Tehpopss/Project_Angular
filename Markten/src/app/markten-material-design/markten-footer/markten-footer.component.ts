import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import MarktenText from '../utilities/markten-text'

@Component({
  selector: 'app-markten-footer',
  templateUrl: './markten-footer.component.html',
  styleUrls: ['./markten-footer.component.css'],
  providers: [MarktenText]
})
export class MarktenFooterComponent implements OnInit {

  @Input() name = "Aeson Delcroix";
  @Input("located-in") locatedIn = "Belgium"

  @Output() whatAMarkt = new EventEmitter<Markten>();


  private _firstAppearance: number = 2021;
  @Input()
  set firstAppearance(val: number){
    if (val > 1950){
      this._firstAppearance = val;
    }else{
      console.error("Markt is to ancient");
    }
  }

  get firstAppearance() {
    return this._firstAppearance;
  }

  constructor(private marktenText: MarktenText) { }

  ngOnInit(): void {
    console.log(this.marktenText);
  }

  returnMarktData(){
    let markt = {
      name: this.name,
      locatedIn: this.locatedIn,
    };
    this.whatAMarkt.emit(markt);
  }
}

export type Markten = {
  name: string;
  locatedIn: string;
}
