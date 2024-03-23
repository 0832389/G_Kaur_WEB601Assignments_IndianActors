import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contentList } from '../helper-files/contentDb';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private contentUrl = 'api/content';

  constructor(private http: HttpClient) { }

  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>(this.contentUrl, content).pipe(
      catchError(this.handleError<any>('addContent'))
    );
  }

  

  handleError<T>(arg0: string): (err: any, caught: Observable<Content>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
  getContentList(): Observable<Content[]> {
    return of(contentList);
  }

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    // Handle error in a meaningful way
    return of(result as T);
  }
}
};
