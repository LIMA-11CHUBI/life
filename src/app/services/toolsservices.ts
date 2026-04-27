import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private baseUrl = 'https://restaurant.stepprojects.ge/api';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Products/GetAll`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Categories/GetAll`);
  }
}