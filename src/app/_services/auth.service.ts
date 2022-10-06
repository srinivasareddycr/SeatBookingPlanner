import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';


const AUTH_API = 'http://localhost:8081/sbp/api/v1/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  //login(username: string, password: string): Observable<any> {
    login(credentials: any):Observable<any>{
    return this.http.post(AUTH_API + 'login', {
      username:credentials.username,
      password:credentials.password
    }, httpOptions);
  }

  register(user:any): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username:user.username,
      email:user.email,
      
      password:user.password
    }, httpOptions);
  }
}
