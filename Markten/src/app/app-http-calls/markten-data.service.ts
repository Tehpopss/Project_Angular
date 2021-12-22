import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Markten } from '../markten-material-design/models/markten'

const URL_PREFIX = "https://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class MarktenDataService {

  constructor(private httpClient: HttpClient) { }

  getMarkten(): Observable<Markten[]>{
    return this.httpClient.get<Markten[]>(`${URL_PREFIX}/markten`);
  }
}