/*
import { Component, Input, OnInit } from '@angular/core';

import { NbDialogRef } from '@nebular/theme';

import { Inject } from '@angular/core';
import {  Task } from '../../../../Entities/Backlog/Task';
import { IterationService } from '../../../../Services/iteration.service';
import { Iteration } from '../../../../Entities/Backlog/Iteration';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Priority } from '../../../../Entities/Backlog/priority.enum';
import { TaskService } from '../../../../Services/Backlog/task.service';

@Component({
  selector: 'ngx-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrls: ['./addtasks.component.scss']
})
export class AddtasksComponent {
  

@Input() iterationId: string;
taskForm: FormGroup;
priorities: Priority[] = [Priority.LOW, Priority.MEDIUM, Priority.HIGH];


constructor(
  private fb: FormBuilder,
  protected ref: NbDialogRef<AddtasksComponent>, private taskservice:IterationService
) {
  this.taskForm = this.fb.group({
    taskName: ['', Validators.required],
    description: [''],
    dueDate: [''],
    priority: [Priority.LOW, Validators.required], // Ensure priority is initialized
    isCompleted: [false]
  });
}

submit() {
  if (this.taskForm.valid) {
    const task: Task = this.taskForm.value;
    this.ref.close(task); // Pass the task back to the caller
  } else {
    console.error('Form is invalid');
  }
}

cancel() {
  this.ref.close();
}
}
*/

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Task } from '../../../../Entities/Backlog/Task';
import { Priority } from '../../../../Entities/Backlog/priority.enum';
import { TaskService } from '../../../../Services/Backlog/task.service';
import { IterationService } from '../../../../Services/iteration.service';

@Component({
  selector: 'ngx-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrls: ['./addtasks.component.scss']
})
export class AddtasksComponent implements OnInit {

  @Input() iterationId: string;
  @Input() task: Task; // This will be passed when editing a task

  taskForm: FormGroup;
  priorities: Priority[] = [Priority.LOW, Priority.MEDIUM, Priority.HIGH];

  constructor(
    private fb: FormBuilder,
    protected ref: NbDialogRef<AddtasksComponent>,
    private taskService: TaskService,
    private iterationService: IterationService
  ) {}

  ngOnInit(): void {
    // Initialize the form with the existing task data (for edit) or with default values (for add)
    this.taskForm = this.fb.group({
      taskName: [this.task?.taskName || '', Validators.required],
      description: [this.task?.description || ''],
      dueDate: [this.task?.dueDate || '', Validators.required],
      priority: [this.task?.priority || Priority.LOW, Validators.required],
      isCompleted: [this.task?.isCompleted || false]
    });
  }

  /*submit(): void {
    if (this.taskForm.valid) {
      const formValue = this.taskForm.value;

      if (this.task) {
        // Editing an existing task
        const updatedTask: Task = { ...this.task, ...formValue };
        this.taskService.updateTask(updatedTask).subscribe(() => {
          this.ref.close(updatedTask); // Pass the updated task back to the parent component
        });
      } else {
        // Adding a new task
        const newTask: Task = { ...formValue, taskId: this.generateId() };
        this.iterationService.addTaskToIteration(this.iterationId, newTask).subscribe(() => {
          this.ref.close(newTask); // Pass the new task back to the parent component
        });
      }
    } else {
      console.error('Form is invalid');
    }
  }*/
    submit() {
      if (this.taskForm.valid) {
        const task: Task = this.taskForm.value;
        this.ref.close(task); // Pass the task back to the caller
      } else {
        console.error('Form is invalid');
      }
    }

  cancel(): void {
    this.ref.close();
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
