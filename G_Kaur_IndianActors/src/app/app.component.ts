import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentCardComponent } from "./content-card/content-card.component";
import { CommonModule } from '@angular/common';
import { Content } from './helper-files/content-interface';
import { ContentService } from './services/content.service';
import { MessagesService } from './services/messages.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ContentCardComponent, RouterOutlet, CommonModule]
})
export class AppComponent {
  title = 'G_Kaur_IndianActors';
contentList: any;
contentItem1 = {
  id: 1,
  title: 'Tarsem Jassar',
  description: 'Punjabi Actor',
  creator: 'Movies',
  imgURL: 'https://th.bing.com/th/id/OIP.a8TZRyDb2-Q1s1XW5N4OGwHaEK?rs=1&pid=ImgDetMain',
  type: 'Films',
  tags: ['Mobies', 'Punjabi']
  selectedId: number,
  content: Content,
  errorMessage: string,
}

contentItem2 = {
  id: 2,
        title: 'Ranjit Bawa',
        description: 'Indian Actor and Singer.',
        creator: 'Punjabi Music',
        imgURL: 'https://th.bing.com/th/id/OIP.tKS5AHXA3TGybuszSUraRwHaEK?rs=1&pid=ImgDetMain',
        type: 'Pollywood',
        tags: ['Pollywood', 'Movies']
}

contentItem3 = {
  id: 3,
        title: 'Ammy Virk',
        description: 'Drama King',
        creator: 'Comedy Films',
        imgURL: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/8/Desk/2020_8$largeimg_1679664414.jpeg',
        type: 'Comadian',
        tags : ['Actor', 'Comadian']
}
}

constructor(private ContentService: ContentService, private MessagesService: MessagesService) {}

retrieveContent(): void {
  if (isNaN(this.selectedId) || this.selectedId < 1 || this.selectedId > this.contentService.getContentList().length) {
    this.errorMessage = 'Invalid ID entered!';
    return;
  }

  this.contentService.getContentById(this.selectedId).subscribe(content => {
    if (content) {
      this.content = content;
      this.errorMessage = null;
      this.messagesService.addMessage(`Content Item at id: ${this.selectedId}`);
    } else {
      this.errorMessage = 'Content not found!';
    }
  });
}

