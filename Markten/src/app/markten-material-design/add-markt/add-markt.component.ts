import { Component, OnInit } from '@angular/core';
import { Markten } from '../models/markten'

@Component({
  selector: 'app-add-markt',
  templateUrl: './add-markt.component.html',
  styleUrls: ['./add-markt.component.css']
})
export class AddMarktComponent implements OnInit {

  marktenName : string="";
  constructor() { }

  ngOnInit(): void {
  }

}
