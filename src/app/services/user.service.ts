import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {}

  registerUser(user: User):Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, user);
  }

  loginUser(user: User):Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/auth`, user);
  }

  getUser(id: string):Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/profile/${id}`);
  }

  updateUser(user: User, id: string):Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}/profile/${id}`, user);
  }

  updatePassword(password: any, id: string):Observable<User> {
    return this.http.patch<any>(`${this.baseUrl}/password/${id}`, password);
  }

  logOutUser():Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/logout`,null);
  }

}
