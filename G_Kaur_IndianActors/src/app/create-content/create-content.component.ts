import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.css'
})

export class CreateContentComponent {

  @Output() contentAdded = new EventEmitter<any>();
  id: number;
  title: string;
  description: string;
  creator: string;
  type: string;
    }

  submitContent() {
    const newContent = {
      id: this.id,
      title: this.title,
      description: this.description,
      creator: this.creator,
      type: this.type,
    };

    // Perform validation for required fields
    if (!newContent.id || !newContent.title) {
      console.error('Required fields are missing.');
      return;
    }

    // Simulate promise pattern
    const promise = new Promise<any>((resolve, reject) => {
      
      // Simulate successful submission
      if (newContent.id && newContent.title) {
        resolve(newContent);
      } else {
        reject('Incomplete content. Please fill all fields.');
      }
    });

    promise.then(
      (content) => {
        console.log(`Content successfully added: ${content.title}`);
        this.contentAdded.emit(content);
        this.clearFields();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  clearFields() {
    this.id = null;
    this.title = '';
    this.description = '';
    this.creator = '';
    this.type = '';
  }


function submitContent() {
  throw new Error('Function not implemented.');
}

function clearFields() {
  throw new Error('Function not implemented.');
}

export class ContentListComponent {
  contents: any[] = [];

  addContent(content: any) {
    const clonedContent = { ...content };
    this.contents.push(clonedContent);
  }
}

