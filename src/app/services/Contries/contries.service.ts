import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


// const optionRequete = {
//   headers: new HttpHeaders({
//     'Access-Control-Allow-Origin':'*',
//     'Access-Control-Request-Headers':'*'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class ContriesService {

  baseUrl = '';
  baseLocation='';


  constructor( private http: HttpClient) {
    this.baseUrl='https://restcountries.com/v2/all';
    this.baseLocation='https://api.ipgeolocation.io/ipgeo?apiKey=c9eb1d8aa8d4439b84b57040fd891125';
 }


  getAll(){
    return this.http.get(`${this.baseUrl}`);
  }
  getLocation(){
    return this.http.get(`${this.baseLocation}`);
  }
}
