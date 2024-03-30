import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-content-dialog',
  standalone: true,
  imports: [],
  templateUrl: './add-content-dialog.component.html',
  styleUrl: './add-content-dialog.component.css'
})
export class AddContentDialogComponent implements OnInit {
  contentType: string = '';
  contentName: string = '';
  contentDescription: string = '';
  contentId: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddContentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    const contentData = {
      type: this.contentType,
      name: this.contentName,
      description: this.contentDescription,
    };
    this.dialogRef.close(contentData);
  }
}
