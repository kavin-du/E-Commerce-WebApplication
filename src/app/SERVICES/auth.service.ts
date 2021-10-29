import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const AUTH_API = 'https://mystore-api-330411.el.r.appspot.com/api/v1/auth/'; // check s in http

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions);
  }

  customerRegister(firstName: string, lastName: string, email: string, password: string, address: string, mobile: string): Observable<any> {
    return this.http.post(AUTH_API + 'customer/register', {
      firstName, 
      lastName,
      email,
      password,
      address,
      mobile,
    }, httpOptions);
  }
}
