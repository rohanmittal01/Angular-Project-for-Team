import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CasesService {

  constructor(private http: HttpClient) { }

  getCases(){
    return this.http.get('https://corona.lmao.ninja/v2/countries/');
  }
}
