import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../services/content.service';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-detail',
  standalone: true,
  imports: [],
  templateUrl: './content-detail.component.html',
  styleUrl: './content-detail.component.css'
})
export class ContentDetailComponent implements OnInit {
  content: Content | undefined;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.getContentDetail();
  }

  getContentDetail(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contentService.getContent(id).subscribe((content: Content | undefined) => {
      this.content = content;
    });
  }
}
