import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api_url, environment } from 'src/environments/environment';
import { UserLoggedIn, UserLogin, UserSignup } from '../interfaces/authentication';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  UserLogin(loginBody: UserLogin): Observable<UserLoggedIn> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Disposition': 'application/x-www-form-urlencoded',
    });
    headers.set("Content-Type","application/x-www-form-urlencoded");

    const body = new HttpParams()
    .set('grant_type', environment.auth.grant_type)
    .set('client_id', environment.auth.client_id)
    .set('client_secret', environment.auth.client_secret)
    .set('scope', environment.auth.scope )
    .set('username', loginBody.username)
    .set('password', loginBody.password);

    return this.httpClient.post<UserLoggedIn>(api_url, body, { headers });
  }

  UserRegister(signupBody: UserSignup){
    const headers: HttpHeaders = new HttpHeaders();
    headers.set("Content-Type","application/plain");
    // const params: HttpParams = new HttpParams();
    // params.set(Pa);

    return this.httpClient.post(api_url,signupBody,{headers})
  }
}
