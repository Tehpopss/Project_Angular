import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { MarktenDataService } from "src/app/app-http-calls/markten-data.service";
import { Markten } from "../models/markten";

@Component({
  selector: 'app-markten-grid-list',
  templateUrl: './markten-grid-list.component.html',
  styleUrls: ['./markten-grid-list.component.css']
})
export class MarktenGridListComponent implements OnInit {

  constructor(private marktService: MarktenDataService) { }

  markten: Observable<Array<Markten>> | undefined;

  ngOnInit(): void {
    this.markten=this.marktService.getMarkten();
  }

}
