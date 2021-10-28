import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

const API_URL2 = 'http://losdfsfsfs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Todo: this service provides methods to access public and protected resources
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
   return this.http.get(API_URL2 + 'all', { responseType: 'text'});
  }

  getUserBoad(): Observable<any> {
    return this.http.get(API_URL2 + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL2 + 'admin', { responseType: 'text' });
  }
}
