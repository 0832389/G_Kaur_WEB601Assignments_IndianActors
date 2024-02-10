import { Component, OnInit} from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
getBackgroundColor(arg0: any) {
throw new Error('Method not implemented.');
}
  contentList: Content[] = [
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
      description: 'Singer',
      creator: 'Movies',
      imgURL: 'https://www.celebrityhow.com/wp-content/uploads/2018/09/jassi-gill.jpg',
      type: 'Romantic',
      tags: ['Actor', 'Singer']

    },

    {
      id: 5,
      title: 'Amrinder Gill',
      description: 'Singer',
      creator: 'Movies',
      imgURL: 'https://th.bing.com/th/id/OIP.QxiqR5UUMXUGNDuTH9DRDQHaEK?rs=1&pid=ImgDetMain',
      type: 'Romantic',
      tags: ['Actor', 'Singer']
    },

    {
      id: 6,
      title: 'Gurdaas Maan',
      description: 'Star of industry.',
      creator: 'Singer',
      imgURL: 'https://th.bing.com/th/id/OIP.9cb4JjhPUv_JVHOHxx4kSwHaFS?rs=1&pid=ImgDetMain',
      type: 'Romantic',
      tags: ['Star', 'Singer']

    },

    {
      id: 7,
      title: 'Pavitar Lassoi',
      description: 'Singer',
      creator: 'Singer',
      imgURL: 'https://yt3.googleusercontent.com/wEvxrHwSYrZJ31EF2VHgcSSTvV2fmS0wADygtj79W-rK8W6Kf3iOXgJTLk7PTSs6T3k9EfbUtg=s900-c-k-c0x00ffffff-no-rj',
      type: 'Romantic',
      tags: ['Singer', 'Singer']
    },
  ];

  searchTerm: string = '';
  searchResultMessage: string = '';

  constructor() { }

  ngOnInit(): void { }

  checkExistence(): void {
    const foundContent = this.contentList.find(content => content.title.toLowerCase() === this.searchTerm.toLowerCase());
    if (foundContent) {
      this.searchResultMessage = `Content with title "${this.searchTerm}" exists.`;
    } else {
      this.searchResultMessage = `Content with title "${this.searchTerm}" does not exist.`;
    }
  }
}
