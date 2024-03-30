import { Component } from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../content.interface';
import { ContentService } from '../content.service';
import { MatDialog } from '@angular/material/dialog';


/* @Component({
  selector: 'app-modify-content',
  standalone: true,
  imports: [],
  templateUrl: './modify-content.component.html',
  styleUrl: './modify-content.component.css'
})

export class ModifyContentComponent {
  @Output() contentAdded = new EventEmitter<Content>(); // Define an output event

  // Define variables for input fields
  id: number;
  title: string;

/* export class ModifyContentComponent {
  newContent: Content = {
    id: null,
    title: '',
    description: '',
    creator: ''
  };
 */
  /* @Output() contentAdded = new EventEmitter<Content>();
  newContent: { id: null; title: string; description: string; creator: string; };

  constructor(private contentService: ContentService) { }

  addContent() {
    this.contentService.addContent(this.newContent).subscribe((addedContent: Content) => {
      this.contentAdded.emit(addedContent);
      this.clearFields();
    });
  }

  clearFields() {
    this.newContent = {
      id: null,
      title: '',
      description: '',
      creator: ''
    }; */
/* 
     constructor(private contentService: ContentService, private messageService: MessageService) { }

  addButtonClicked() {
    if (this.id) {
      this.updateContent();
    } else {
      this.addContent();
    }
   } 
   private addContent() {
    const newContent: Content = { id: null, title: this.title }; // Construct new content object
    this.contentService.addContent(newContent).subscribe(() => {
      this.messageService.add('Content added successfully');
      this.clearFields();
      this.contentAdded.emit(newContent); // Emit event to update content list
    });
  }
  }

  // Function to update existing content
  private updateContent() {
    // Check if content exists at the provided id
    this.contentService.getContent(this.id).subscribe(existingContent => {
      if (existingContent) {
        // Update content with values from input fields
        existingContent.title = this.title;
        
        // Call HTTP method to update content on simulated server
        this.contentService.updateContent(existingContent).subscribe(() => {
          this.messageService.add('Content updated successfully');
          this.clearFields();
          this.contentAdded.emit(existingContent); // Emit event to update content list
        });
      } else {
        this.messageService.add(`Content with id ${this.id} does not exist`);
      }
    });
  }

  // Function to clear input fields
  private clearFields() {
    this.id = null;
    this.title = '';
    // Clear other fields as per your Content interface
  };
  */

constructor(private dialog: MatDialog) {}

openDialog(): void {
  const dialogRef = this.dialog.open(AddContentDialogComponent, {
    width: '250px',
    data: {} 

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  })
}
  };




