import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentCardComponent } from "./content-card/content-card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ContentCardComponent]
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
