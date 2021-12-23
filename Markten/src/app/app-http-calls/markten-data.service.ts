import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Markten } from '../markten-material-design/models/markten'

const URL_PREFIX = "https://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class MarktenDataService {

  private httpOption = {headers: new HttpHeaders({'Content-Type': 'application/json'}), withCredentials: true};

  constructor(private httpClient: HttpClient) { }

  getMarkten(): Observable<Markten[]>{
    return this.httpClient.get<Markten[]>(`${URL_PREFIX}/markten`);
  }

  postMarkten(markt:Markten):Observable<Markten> {
    console.log(JSON.stringify(markt));
    return this.httpClient.post<Markten>(`${URL_PREFIX}/markten`,JSON.stringify(markt));
  }
}
