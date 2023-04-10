import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userLogin } from '../Interfaces/userLogin.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getLoginResponse(data: userLogin) {
    // data={userName:"string",password:"Office@123"}
    let url = 'https://officingedge.azurewebsites.net/Login';
    return this.http.post(url, data);
  }
}
