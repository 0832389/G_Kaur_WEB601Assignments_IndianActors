import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contentList } from '../helper-files/contentDb';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

/*@Injectable({
  providedIn: 'root'
})
export class ContentService {
  getContent(id: number) {
    throw new Error('Method not implemented.');
  }
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
*/

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  contentList: Content[] = [
    {id: 1,
      title: 'Tarsem Jassar',
      description: 'Punjabi Actor',
      creator: 'Movies',
      imgURL: 'https://th.bing.com/th/id/OIP.a8TZRyDb2-Q1s1XW5N4OGwHaEK?rs=1&pid=ImgDetMain',
      type: 'Films',
      tags: ['Movies', 'Punjabi']
    },
    {
      id: 2,
      title: 'Ranjit Bawa',
      description: 'Indian Actor and Singer.',
      creator: 'Punjabi Music',
      imgURL: 'https://th.bing.com/th/id/OIP.tKS5AHXA3TGybuszSUraRwHaEK?rs=1&pid=ImgDetMain',
      type: 'Pollywood',
      tags: ['Pollywood', 'Movies']
    },
    {
      id: 3,
      title: 'Ammy Virk',
      description: 'Drama King',
      creator: 'Comedy Films',
      imgURL: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/8/Desk/2020_8$largeimg_1679664414.jpeg',
      type: 'Comedian',
      tags: ['Actor', 'Comedian']
    },
    {
      id: 4,
      title: 'Jassie Gill',
      description: 'IndianActor',
      creator: 'Funny Moviess',
      imgURL: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/8/Desk/2020_8$largeimg_1679664414.jpeg',
      type: 'Actor',
      tags: ['Actor', 'Singer']
    },
    {
      id: 5,
      title: 'Garry Sandhu',
      description: 'Singer',
      creator: 'Romantic Films',
      imgURL: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/8/Desk/2020_8$largeimg_1679664414.jpeg',
      type: 'Actor',
      tags: ['Actor', 'Singer']
    },
    {
      id: 6,
      title: 'Diljit Dosanjh',
      description: 'Industry King',
      creator: 'Comedy and Romantic Films',
      imgURL: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/8/Desk/2020_8$largeimg_1679664414.jpeg',
      type: 'Star',
      tags: ['Actor', 'Star']
    },
  ];

constructor() { }

  getContentList(): Observable<Content[]> {
    // Simulate fetching content list from a server
    return of(this.contentList);
  }

  getContent(id: number): Observable<Content | undefined> {
    // Simulate fetching content by id from a server
    const content = this.contentList.find(item => item.id === id);
    return of(content);
  }
}
