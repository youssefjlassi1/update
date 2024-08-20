

//import { SprintService } from '../../../Services/Backlog/sprint.service'; 
import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService,NbDialogConfig } from '@nebular/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ConfirmationDialogComponent } from '../../../workshop/ConfirmationDialog';
//import { Sprint } from '../../../Entities/Backlog/Iteration';

@Component({
  selector: 'ngx-addsprint',
  templateUrl: './addsprint.component.html',
  styleUrls: ['./addsprint.component.scss']
})
export class AddsprintComponent   {
/*  @Input() sprintId?: string;
  sprintForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sprintService: SprintService,
    private dialogRef: NbDialogRef<AddsprintComponent>
  ) {}

  ngOnInit(): void {
    this.sprintForm = this.fb.group({
      sprintName: ['', Validators.required],
      sprintDescription: ['', Validators.required],
    //  startDate: ['', Validators.required],
      //endDate: ['', Validators.required],
      estimation: ['', Validators.required],
      
    });
    
    

    if (this.sprintId) {
      this.loadSprint();
    }
  }

  loadSprint() {
    this.sprintService.getSprint(this.sprintId!).subscribe((data) => {
      this.sprintForm.patchValue(data);
    });
  }

  onSubmit() {
    if (this.sprintForm.valid) {
      if (this.sprintId) {
        this.sprintService.updateSprint(this.sprintId, this.sprintForm.value).subscribe(() => {
          this.dialogRef.close();
        });
      } else {
        this.sprintService.createTask(this.sprintForm.value).subscribe(() => {
          this.dialogRef.close();
        });
      }
    }
  }*/
}
