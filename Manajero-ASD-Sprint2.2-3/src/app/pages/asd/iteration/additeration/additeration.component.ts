/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDateService, NbDialogRef } from '@nebular/theme';
import { IterationService } from '../../Services/iteration.service';
import { Iteration } from '../../Entities/Backlog/Iteration';

@Component({
  selector: 'ngx-additeration',
  templateUrl: './additeration.component.html',
  styleUrls: ['./additeration.component.scss']
})
export class AdditerationComponent implements OnInit {

  iterationForm: FormGroup;
  isLoading: boolean = false;
  goals: Iteration[] = [];





  constructor(
    private fb: FormBuilder,
    protected ref: NbDialogRef<AdditerationComponent>,
    private goalService: IterationService
  ) {
  }

  ngOnInit(): void {
    this.iterationForm = this.fb.group({
      sprintName: ['', Validators.required],
      sprintDescription: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      estimation: ['']
    });
  }
  

  loadIterations() {
    this.goalService.getIterations().subscribe((goals: Iteration[]) => {
      this.goals = goals;
    });
  }

  createGoal(): void {
    if (this.iterationForm.valid) {
      this.isLoading = true;

      this.goalService.createIteration(this.iterationForm.value).subscribe(
        (response: any) => {
          console.log('Goal created successfully');
          setTimeout(() => {
            this.isLoading = false;
            this.loadIterations(); // Reload goals
            this.ref.close(this.iterationForm.value); // Close dialog with form data
          }, 2000);
        },
        error => {
          console.error('Error creating Goal:', error);
          this.isLoading = false;
        }
      );
    }
  }

 /* deleteGoal(id: string): void {
    this.goalService.deleteIteration(id).subscribe(() => {
      this.loadIterations(); // Reload goals after deletion
    });
  }*/

 /* onNoClick(): void {
    this.ref.close(); // Close dialog without any data
  }
  cancel(): void {
    this.ref.close();
  }
}
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDatepickerComponent, NbDialogRef } from '@nebular/theme';
import { IterationService } from '../../Services/iteration.service';
import { Iteration } from '../../Entities/Backlog/Iteration';

@Component({
  selector: 'ngx-additeration',
  templateUrl: './additeration.component.html',
  styleUrls: ['./additeration.component.scss']
})
export class AdditerationComponent implements OnInit {

  iterationForm: FormGroup;
  isLoading: boolean = false;
  goals: Iteration[] = [];

  constructor(
    private fb: FormBuilder,
    protected ref: NbDialogRef<AdditerationComponent>,
    private goalService: IterationService
  ) {}

  ngOnInit(): void {
    this.iterationForm = this.fb.group({
      sprintName: ['', Validators.required],
      sprintDescription: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      estimation: ['']
    });
  }

  loadIterations() {
    this.goalService.getIterations().subscribe((goals: Iteration[]) => {
      this.goals = goals;
    });
  }

  createGoal(): void {
    if (this.iterationForm.valid) {
      this.isLoading = true;

      this.goalService.createIteration(this.iterationForm.value).subscribe(
        (response: any) => {
          console.log('Goal created successfully');
          setTimeout(() => {
            this.isLoading = false;
            this.loadIterations(); // Reload goals
            this.ref.close(this.iterationForm.value); // Close dialog with form data
          }, 2000);
        },
        error => {
          console.error('Error creating Goal:', error);
          this.isLoading = false;
        }
      );
    }
  }

  onNoClick(): void {
    this.ref.close(); // Close dialog without any data
  }

  cancel(): void {
    this.ref.close();
  }
}
