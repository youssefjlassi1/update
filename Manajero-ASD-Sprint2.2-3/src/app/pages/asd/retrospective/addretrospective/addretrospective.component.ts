import { Component } from '@angular/core';
import { Post, TypePost } from '../../Entities/Workshop';
import { PostService } from '../../Services/Communication/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ConfirmationDialogComponent } from '../../workshop/ConfirmationDialog';

@Component({
  selector: 'ngx-addretrospective',
  templateUrl: './addretrospective.component.html',
  styleUrls: ['./addretrospective.component.scss']
})
export class AddretrospectiveComponent {
  addPostForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    protected dialogRef: NbDialogRef<AddretrospectiveComponent>,
    private dialogService: NbDialogService,
  ) {
    this.addPostForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: [null]
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  saveChanges(): void {
    if (this.addPostForm.valid) {
      this.confirmSave();
    }
  }

  private confirmSave(): void {
    this.dialogService.open(ConfirmationDialogComponent, {
      context: {
        message: 'Are you sure you want to save changes?',
      },
    }).onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        const { title, content, image } = this.addPostForm.value;
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('typePost', 'Retrospective'); // Automatically set the typePost to 'Retrospective'
        if (image) {
          formData.append('image', image);
        }

        const userId = '66928fac6771745902a66142'; // Replace with actual user ID
        this.postService.addPost(userId, formData).subscribe(
          response => {
            console.log('Post added successfully', response);
            this.dialogRef.close(true); // Pass true to indicate successful addition
          },
          error => {
            console.error('Error adding post', error);
          }
        );
      }
    });
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.addPostForm.patchValue({
        image: file
      });
    }
  }

  isFieldInvalid(field: string): boolean {
    const formControl = this.addPostForm.get(field);
    return formControl?.invalid && (formControl.dirty || formControl.touched);
  }
}
