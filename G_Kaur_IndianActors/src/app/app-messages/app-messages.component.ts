import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-app-messages',
  standalone: true,
  imports: [],
  templateUrl: './app-messages.component.html',
  styleUrl: './app-messages.component.css'
})
export class AppMessagesComponent implements OnInit {
  messages: string[] = [];

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.messagesService.getMessages().subscribe((messages: string[]) => {
      this.messages = messages;
    });
  }

}
