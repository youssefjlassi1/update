import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService,NbDialogConfig } from '@nebular/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Interface } from '../../Entities/Workshop';
import { InterfaceService } from '../../Services/interface.service';
import { ConfirmationDialogComponent } from '../ConfirmationDialog';

@Component({
  selector: 'ngx-edit-how-interface-modal',
  templateUrl: './edit-how-interface-modal.component.html',
  styleUrls: ['./edit-how-interface-modal.component.scss']
})
export class EditHowInterfaceModalComponent implements OnInit {
  @Input() interfaceData: Interface;
  interfaceForm: FormGroup;

  constructor(
    protected dialogRef: NbDialogRef<EditHowInterfaceModalComponent>,
    private dialogService: NbDialogService,
    private fb: FormBuilder,
    private interfaceService: InterfaceService
  ) {}
  ngOnInit(): void {
    this.interfaceForm = this.fb.group({
      howdesc: [this.interfaceData.howdesc, [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      specdesc: [this.interfaceData.specdesc, [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      colldesc: [this.interfaceData.colldesc, [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      learndesc: [this.interfaceData.learndesc, [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
     
    });

  }
  close(): void {
    this.dialogRef.close();
  }

  saveChanges(): void {
    if (this.interfaceForm.valid) {
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
        const updatedInterfaceData = { ...this.interfaceData, ...this.interfaceForm.value };
        if (this.interfaceData?.id) {
          // Update existing interface
          this.interfaceService.updateInterface(this.interfaceData.id, updatedInterfaceData).subscribe(
            (response) => {
              console.log('Interface updated successfully:', response);
          
              localStorage.setItem('currentInterfaceId', response.id); // Save updated ID to localStorage
              this.dialogRef.close(response);
            },
            (error) => {
              console.error('Error updating interface:', error);
            }
          );
        } else {
          // Create new interface
          this.interfaceService.addInterface(updatedInterfaceData).subscribe(
            (response) => {
              console.log('Interface created successfully:', response);
              // Store the new ID
              localStorage.setItem('currentInterfaceId', response.id); // Save new ID to localStorage
              this.dialogRef.close(response);
            },
            (error) => {
              console.error('Error creating interface:', error);
            }
          );
        }
      }
    });
  }

  isFieldInvalid(field: string): boolean {
    const formControl = this.interfaceForm.get(field);
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }
}

