import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contentList } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContentList(): Observable<Content[]> {
    return of(contentList);
  }
}
