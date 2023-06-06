import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assets } from './models/assets.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  private baseUrl: string = 'http://localhost:3000/Assets';

  constructor(private http: HttpClient) {}

  addAssets(Assets: Assets) {
    return this.http.post<Assets>(`${this.baseUrl}`, Assets);
  }

  getAssests(): Observable<Assets[]> {
    return this.http.get<Assets[]>(`${this.baseUrl}`);
  }

  updateAssets(Assets: Assets, id: string) {
    return this.http.put<Assets>(`${this.baseUrl}/${id}`, Assets);
  }

  deleteAssets(id: string) {
    return this.http.delete<Assets>(`${this.baseUrl}/${id}`);
  }

  getAssetsById(id: string) {
    return this.http.get<Assets>(`${this.baseUrl}/${id}`);
  }
}
