import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private http: HttpClient
  ) {}

 getAllNotification(): Observable<any>{
  return this.http.get<any>('url')
 }

 getNotification(): Observable<any>{
   return this.http.get<any>('url')
  }

  createNotification(data:any):Observable<any>{
    return this.http.post('url',data)
  }

  editNotification(data:any):Observable<any>{
    return this.http.patch('url',data)
  }


  changeReadStatus(readStatus:boolean):Observable<any>{
    return this.http.post<any>('url',readStatus)
  }
  // deleteNotice(id:string):Observable<any>{
  //   return this.http.delete('url',id)
  // }
}
