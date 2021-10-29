import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // https://mystore-api-330411.el.r.appspot.com
  private products = 'https://fakestoreapi.com/products?limit=15';
  // private products = 'https://mystore-api-330411.el.r.appspot.com/api/v1/items';
  private product = 'https://fakestoreapi.com/products/';

  constructor(private Http:HttpClient) { }

  getProducts():Observable<any> {
    return this.Http.get(this.products);
  }

  getSingleProduct(id: string):Observable<any>{
    return this.Http.get(this.product+id);
  }
}
