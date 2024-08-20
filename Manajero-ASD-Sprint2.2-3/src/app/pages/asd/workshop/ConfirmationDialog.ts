import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <nb-card>
      <nb-card-header>Confirmation</nb-card-header>
      <nb-card-body>
        <p>{{ message }}</p>
        <button nbButton status="success" (click)="confirm(true)">Yes</button>
        <button nbButton status="danger" (click)="confirm(false)">No</button>
      </nb-card-body>
    </nb-card>
  `,
})
export class ConfirmationDialogComponent {
  @Input() message: string;

  constructor(protected dialogRef: NbDialogRef<ConfirmationDialogComponent>) {}

  confirm(confirmed: boolean): void {
    this.dialogRef.close(confirmed);
  }
}
