import { Injectable } from '@angular/core';
import { ApiResponse } from '../model/api.response';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseUrl: string ='https://61ece709f3011500174d2245.mockapi.io/nb/getUsers/';

  

  getUsers()  {
    return this.http.get<ApiResponse>(this. baseUrl);
  }

  getUserById(user_id: number) {
    return this.http.get(this.baseUrl + user_id);
  }

  createUser(user: User) {
    return this.http.post<any>(this.baseUrl, user);
  }

  updateUser(user_id: number, user: User) {
    return this.http.put<any>(this.baseUrl + user.user_id, user);
  }

  deleteUser(user_id: number){
    return this.http.delete<any>(this.baseUrl + user_id)
    .pipe(map((res:any)=>{
      return res
    }))
    
  }
}