import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  //API_URI='http://localhost:3000/src/data';//Para el front-end
  API_URI= 'http://localhost:11387/api'; //Backend
  constructor(private http:HttpClient) { }
  login(usrDataLogin:Login){
    return this.http.post(`${this.API_URI}/login/login/`,usrDataLogin)
  }
}
