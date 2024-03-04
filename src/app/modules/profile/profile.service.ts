import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBuyerRequest } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private baseUrl: string = 'http://localhost:5000/api/buyers';

  constructor(private http: HttpClient) {}

  createBuyer(buyer:IBuyerRequest):Observable<IBuyerRequest> {
    return this.http.post<IBuyerRequest>(`${this.baseUrl}`, buyer);
  }

  getSingleBuyer(id: string):Observable<IBuyerRequest> {
    return this.http.get<IBuyerRequest>(`${this.baseUrl}/${id}`);
  }

  updateBuyer(buyer: IBuyerRequest, id: string):Observable<IBuyerRequest> {
    return this.http.patch<IBuyerRequest>(`${this.baseUrl}/${id}`, buyer);
  }

  //

}
