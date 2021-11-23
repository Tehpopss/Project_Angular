import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markten-card',
  templateUrl: './markten-card.component.html',
  styleUrls: ['./markten-card.component.css']
})
export class MarktenCardComponent implements OnInit {

  ImageUrl: string = "/assets/images/Markt_Wervik.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
