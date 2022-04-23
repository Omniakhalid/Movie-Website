import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _HttpClient:HttpClient) { }
  signUp(registerData:any):Observable<any>{
    return this._HttpClient.post("https://routeegypt.herokuapp.com/signup",registerData);
  }
  signIn(logInData:any):Observable<any>{
    return this._HttpClient.post("https://routeegypt.herokuapp.com/signin",logInData);
  }
}
