import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@app/modules/product/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly domain = 'http://localhost:3000';
  private readonly productsEndpoint = 'products';

  constructor(private http: HttpClient) { }

  // GET /products/:id
  public getProduct(id: string): Observable<Product> {
    const requestUrl = `${this.domain}/${this.productsEndpoint}/${id}`;
    return this.http.get<Product>(requestUrl);
  }
}
