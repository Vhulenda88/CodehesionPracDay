import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api_url } from 'src/environments/environment';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) { }

  getMenu():Observable<Menu>{
   // getting all the categories using get request
    const token = localStorage.getItem("id_token");
    const headers: HttpHeaders = new HttpHeaders();
    headers.set("Authorization", "Bearer "+token);
    return this.httpClient.get<Menu>(api_url+"/v1/admin/categories",{});
    
  }
}
