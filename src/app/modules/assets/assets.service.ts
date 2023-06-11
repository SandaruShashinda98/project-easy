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

  addAssets(Assets: Assets): Observable<any> {
    return this.http.post<Assets>(`${this.baseUrl}`, Assets);
  }

  getAssests(): Observable<Assets[]> {
    return this.http.get<Assets[]>(`${this.baseUrl}`);
  }

  updateAssets(Assets: Assets, idNo: string) {
    return this.http.put<Assets>(`${this.baseUrl}/${idNo}`, Assets);
  }

  deleteAssets(idNo: string) {
    return this.http.delete<Assets>(`${this.baseUrl}/${idNo}`);
  }

  getAssetsById(idNo: string) {
    return this.http.get<Assets>(`${this.baseUrl}/${idNo}`);
  }
}
