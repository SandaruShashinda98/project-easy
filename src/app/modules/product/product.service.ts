import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductRequest } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'http://localhost:5000/api/items';

  constructor(private http: HttpClient) {}

  createItem(item: IProductRequest): Observable<IProductRequest> {
    return this.http.post<IProductRequest>(`${this.baseUrl}`, item);
  }

  updateItem(item: IProductRequest, id: string): Observable<IProductRequest> {
    return this.http.patch<IProductRequest>(`${this.baseUrl}/${id}`, item);
  }
}
