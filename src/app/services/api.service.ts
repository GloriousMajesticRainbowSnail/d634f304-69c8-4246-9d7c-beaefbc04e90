import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly domain = 'http://localhost:3000';

  private readonly productsEndpoint = 'products';

  constructor(private http: HttpClient) { }


  public getProduct(id: string) {
    const requestUrl = `${this.domain}/${this.productsEndpoint}/${id}`;
    console.log(`calling ${requestUrl}`);
    return this.http.get(requestUrl);
  }
}
