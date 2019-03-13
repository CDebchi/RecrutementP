import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  registerProfil (body){
    return this.http.post('http://localhost:4000/User/registerProfil', body);
  }
 
  registerCompany (body){
    return this.http.post('http://localhost:4000/User/registerCompany', body);
  }

  login(body){
    return this.http.post('http://localhost:4000/User/Login', body);
  }
}
