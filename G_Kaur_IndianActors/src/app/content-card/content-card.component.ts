import { Component, OnInit} from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [RouterOutlet, ContentCardComponent, RouterOutlet, CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css'
})
export class ContentCardComponent implements OnInit {
content: any;
contentList: any;
  
    constructor() {
  
      // Adding 3 items to the ContentList
      const contentItem1: Content = {
        id: 1,
        title: 'Tarsem Jassar',
        description: 'Punjabi Actor',
        creator: 'Movies',
        imgURL: 'https://th.bing.com/th/id/OIP.a8TZRyDb2-Q1s1XW5N4OGwHaEK?rs=1&pid=ImgDetMain',
        type: 'Films',
        tags: ['Mobies', 'Punjabi']
      };
          
  
      const contentItem2: Content = {
        id: 2,
        title: 'Ranjit Bawa',
        description: 'Indian Actor and Singer.',
        creator: 'Punjabi Music',
        imgURL: 'https://th.bing.com/th/id/OIP.tKS5AHXA3TGybuszSUraRwHaEK?rs=1&pid=ImgDetMain',
        type: 'Pollywood',
        tags: ['Pollywood', 'Movies']
  };

  
      const contentItem3: Content = {
        id: 3,
        title: 'Ammy Virk',
        description: 'Drama King',
        creator: 'Comedy Films',
        imgURL: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/8/Desk/2020_8$largeimg_1679664414.jpeg',
        type: 'Comadian',
        tags : ['Actor', 'Comadian']
  };

  
}
  ngOnInit(): void {
    
  }
  }




