import { Component, OnInit } from '@angular/core';

import { MarktenDataService } from 'src/app/data-services/markten-data.service';

@Component({
  selector: 'app-markten-card',
  templateUrl: './markten-card.component.html',
  styleUrls: ['./markten-card.component.css']
})
export class MarktenCardComponent implements OnInit {

  ImageUrl: string = "/assets/images/Markt_Wervik.jpg";

  constructor(private marktData: MarktenDataService) { }

  ngOnInit(): void {
    this.marktData.getMarkten().subscribe(data => console.log(data));
  }

}

