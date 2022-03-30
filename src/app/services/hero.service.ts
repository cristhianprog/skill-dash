import { Injectable } from '@angular/core';
import { Like } from '../modules/likes.module';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private likeUrl = 'api/skills';
  constructor(private http: HttpClient) { }

  getAllLikes(): Observable<Like[]> {
    return this.http.get<Like[]>(this.likeUrl + '/').pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getLike(idSkill:number): Observable<Like[]> {
    return this.http.get<Like[]>(this.likeUrl + '?id=' + idSkill).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  incrementLike(like: Like): Observable<any> {
    return this.http.put(this.likeUrl + '/' + like.id, like);
  }

}