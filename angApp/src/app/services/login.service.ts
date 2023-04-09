import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userLogin } from '../Interfaces/userLogin.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getLoginResponse(data:userLogin){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true // Add this option
    };

    let url = 'https://officingedge.azurewebsites.net/Login'
    return this.http.post(url,{params:{data}})
  }
}
