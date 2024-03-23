/* import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  template: '<ng-container #container></ng-container>',
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
contenItem: any;
onImageClick(_t2: any) {
throw new Error('Method not implemented.');
}
  contentList: Content[] = [];

  constructor() {
    this.contentList = [
      {
        id: 1,
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
  }

  ngOnInit(): void {
  }
}
 */


import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { contentList } from '../helper-files/contentDb';
import { ContentService } from '../services/content.service';

@Component({
  template: '<ng-container #container></ng-container>',
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contenItem: any;
  contents: any;
  onImageClick(_t2: any) {
    throw new Error('Method not implemented.');
  }
  contentList: Content[] = contentList; // Importing contentList from contentDb

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getContentList().subscribe(content => {
      this.contentList = content;
    });
  }
  addContentToList(content: Content) {
    this.contents.push(content);
}
};
