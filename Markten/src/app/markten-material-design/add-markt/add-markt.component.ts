import { Component, OnInit } from '@angular/core';
import { Markten } from '../models/markten'

@Component({
  selector: 'app-add-markt',
  templateUrl: './add-markt.component.html',
  styleUrls: ['./add-markt.component.css']
})
export class AddMarktComponent implements OnInit {

  Name = ""
  markten: Markten;
  addItem(event: any){
    this.item.push(event.value);
  }
  removeHandler(item: string){
    this.items.splice(this.item.indexOf(item),1);
  }
  constructor() {
    this.markt = new Markten();
   }

  ngOnInit(): void {
  }

  get model(){
    return JSON.stringify(this.markten);
  }

}
