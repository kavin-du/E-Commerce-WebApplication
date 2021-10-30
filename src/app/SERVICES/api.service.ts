import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'https://mystore-api-330411.el.r.appspot.com/api/v1/'; 

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // https://mystore-api-330411.el.r.appspot.com
  private products = 'https://fakestoreapi.com/products?limit=15';
  // private products = 'https://mystore-api-330411.el.r.appspot.com/api/v1/items';
  private product = 'https://fakestoreapi.com/products/';

  constructor(private http:HttpClient) { }

  getProducts():Observable<any> {
    return this.http.get(this.products);
  }

  getSingleProduct(id: string):Observable<any>{
    return this.http.get(this.product+id);
  }

  getCategories(): Observable<any> {
    return this.http.get(API+'categories');
  }

  addCategory(category: any): Observable<any> {
    return this.http.post(API + 'categories',
      category, 
      httpOptions);
  }

  addItem(item: any): Observable<any> {
    return this.http.post(API + 'items', 
    item,
    httpOptions);
  }


}
