import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient
  ) {}

 getAllArticle(): Observable<any>{
  return this.http.get<any>('url')
 }

 getArticle(): Observable<any>{
   return this.http.get<any>('url')
  }

  createArticle(data:any):Observable<any>{
    return this.http.post('url',data)
  }

  editArticle(data:any):Observable<any>{
    return this.http.patch('url',data)
  }


  // deleteNotice(id:string):Observable<any>{
  //   return this.http.delete('url',id)
  // }
}