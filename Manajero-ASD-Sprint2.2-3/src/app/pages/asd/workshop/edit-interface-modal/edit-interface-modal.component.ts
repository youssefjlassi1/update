import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-interface-modal',
  templateUrl: './edit-interface-modal.component.html',
  styleUrls: ['./edit-interface-modal.component.scss']
})
export class EditInterfaceModalComponent implements OnInit {
  // Define the form group
  editForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form group with controls
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      definition: ['', Validators.required],
      origin: ['', Validators.required]
    });
  }

  // Example method to check if a field is invalid
  isFieldInvalid(field: string): boolean {
    return (
      this.editForm.get(field)?.invalid &&
      (this.editForm.get(field)?.dirty || this.editForm.get(field)?.touched)
    );
  }

  // Method to submit the form
  onSubmit(): void {
    if (this.editForm.valid) {
      // Handle valid form submission
    } else {
      // Handle invalid form
    }
  }
}
