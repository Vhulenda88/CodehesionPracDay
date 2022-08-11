import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api_url } from 'src/environments/environment';
import { UserLogin, UserSignup } from '../interfaces/authentication';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  UserLogin(loginBody: UserLogin) {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    // headers.set("Content-Type","application/x-www-form-urlencoded");

    return this.httpClient.post<UserLogin>(api_url, loginBody, { headers });
  }

  UserRegister(signupBody: UserSignup){
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.httpClient.post(api_url,signupBody,{headers})
  }
}
