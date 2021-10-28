import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const AUTH_API = 'https://test.test.com/'; // check s in http

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(userName: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      userName,
      password
    }, httpOptions);
  }

  // ! change userName, firstName last name
  customerRegister(firstName: string, lastName: string, email: string, password: string, address: string, mobile: string): Observable<any> {
    return this.http.post(AUTH_API + '/customer/register', {
      firstName, 
      lastName,
      email,
      password,
      address,
      mobile,
    }, httpOptions);
  }
}
