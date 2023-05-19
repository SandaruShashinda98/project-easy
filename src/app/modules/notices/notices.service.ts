import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticesService {

  constructor(
    private http: HttpClient
  ) {}

 getAllNotices(): Observable<any>{
  return this.http.get<any>('url')
 }

 getNotices(): Observable<any>{
   return this.http.get<any>('url')
  }

  createNotice(data:any):Observable<any>{
    return this.http.post('url',data)
  }

  editNotice(data:any):Observable<any>{
    return this.http.patch('url',data)
  }

  // deleteNotice(id:string):Observable<any>{
  //   return this.http.delete('url',id)
  // }
}
