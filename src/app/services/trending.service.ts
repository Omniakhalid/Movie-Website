import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private _HttpClient:HttpClient) { }//dependency injection
  getTrending(mediaType:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=4e8a8cce6437ceb15a135cda0edf856c`);
  }
  getTrendingDetails(mediaType:any,id:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=4e8a8cce6437ceb15a135cda0edf856c&language=en-US`);
  }
}
