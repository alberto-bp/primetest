import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://127.0.0.1:8000/api/products"

  private options = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };

  constructor(private client: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.client.get<Product[]>(this.baseUrl);
  }

  getProduct(id): Observable<Product> {
    return this.client.get<Product>(`${this.baseUrl}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.client.post<Product>(this.baseUrl, product, this.options);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.client.put<Product>(`${this.baseUrl}/${product.id}`, product, this.options);
  }

  deleteProduct(id): Observable<Product> {
    return this.client.delete<Product>(`${this.baseUrl}/${id}`, this.options);
  }
}
