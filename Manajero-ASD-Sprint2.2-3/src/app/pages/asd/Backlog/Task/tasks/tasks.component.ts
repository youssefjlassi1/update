
  import { Component, Inject, OnInit } from '@angular/core';
import { TaskService } from '../../../Services/Backlog/task.service';
import { Task } from '../../../Entities/Backlog/Task';
import { NbDialogRef } from '@nebular/theme';
import { IterationService } from '../../../Services/iteration.service';

@Component({
  selector: 'ngx-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  iterationId: string; // Define iterationId to hold the injected value

  constructor(
    private taskService: TaskService,
    private iterationService: IterationService,
    private dialogRef: NbDialogRef<TasksComponent>,
    @Inject('data') private data: { iterationId: string }
  ) {
    // Initialize iterationId from injected data
    this.iterationId = data?.iterationId;
  }

  ngOnInit(): void {
    if (this.iterationId) {
      this.loadTasks(this.iterationId);
    }
  }

  loadTasks(iterationId: string): void {
    this.iterationService.getTasksByIterationId(iterationId).subscribe(tasks => {
      this.tasks = tasks;
    }, error => {
      console.error('Error loading tasks:', error);
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
