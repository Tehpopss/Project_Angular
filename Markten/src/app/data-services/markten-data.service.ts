import { Injectable } from '@angular/core';
import { Markten } from "../markten-material-design/models/markten";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MarktenDataService {

  constructor() { }

  getMarkten(): Observable<Array<Markten>>{
    return new Observable<Array<Markten>>( observer => {
      observer.next([
        {
          name: "Markt Menen",
          locatie: "Menen",
          cardImage:"/assets/Markt_Rekkem.jpg",
        },
        {
          name: "Markt Rekkem",
          locatie: "Rekkem",
          cardImage:"/assets/Markt_Rekkem.jpg",
        },
      ]);
      observer.complete();
    })
  }
}
