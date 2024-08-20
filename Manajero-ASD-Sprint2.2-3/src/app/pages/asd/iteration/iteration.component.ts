import { Component, OnInit } from '@angular/core';
import { IterationService } from '../Services/iteration.service';
import { Iteration } from '../Entities/Backlog/Iteration';
import { Task } from '../Entities/Backlog/Task';
import {  NbDialogService } from '@nebular/theme';
import { AdditerationComponent } from './additeration/additeration.component';
import { AddtasksComponent } from '../Backlog/Task/tasks/addtasks/addtasks.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TaskService } from '../Services/Backlog/task.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators'; 
@Component({
  selector: 'ngx-iteration',
  templateUrl: './iteration.component.html',
  styleUrls: ['./iteration.component.scss']
})
export class IterationComponent implements OnInit {
  iterations: Iteration[] = [];
  tasksMap: { [iterationId: string]: Task[] } = {};
  tasks: Task[] = [];

  settings: any;
  currentIterationId: string;

  constructor(private taskService: TaskService, private sanitizer: DomSanitizer,private iterationService: IterationService,
    private dialogService: NbDialogService) {
    this.settings = {
      columns: {
        taskName: {
          title: 'Task Name',
          type: 'string',
        },
        description: {
          title: 'Description',
          type: 'string',
        },
        dueDate: {
          title: 'Due Date',
          type: 'date',
          valuePrepareFunction: (date) => new Date(date).toLocaleDateString(),
        },
        priority: {
          title: 'Priority',
          type: 'html',
          valuePrepareFunction: (value: string) => {
            switch (value) {
              case 'LOW':
                return this.sanitizer.bypassSecurityTrustHtml('<span style="color: green;">LOW</span>');
              case 'MEDIUM':
                return this.sanitizer.bypassSecurityTrustHtml('<span style="color: yellow;">MEDIUM</span>');
              case 'HIGH':
                return this.sanitizer.bypassSecurityTrustHtml('<span style="color: red;">HIGH</span>');
              default:
                return value;
            }
          },
          filter: false,
          sort: false
        },
        isCompleted: {
          title: 'Status',
          type: 'html',
          valuePrepareFunction: (value: boolean) => {
            return value ? this.sanitizer.bypassSecurityTrustHtml('<span style="color: green;">DONE</span>') : this.sanitizer.bypassSecurityTrustHtml('<span style="color: red;">NOT DONE</span>');
          },
          filter: false,
          sort: false
        }
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>', // Customize your delete button icon here
        confirmDelete: true,
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      actions: {
        add: false,
        edit: true,
        delete: true,
      },
    
      pager: {
        perPage: 10
      }
    };
  }


  
  ngOnInit(): void {
    this.loadIterations();
    
  }

  
  loadIterations(): void {
    this.iterationService.getIterations().subscribe(data => {
      this.iterations = data;
      this.iterations.forEach(iteration => {
        this.loadTasksForIteration(iteration.id);
      });
    });
  }
 

  loadTasksForIteration(iterationId: string): void {
    this.iterationService.getTasksByIterationId(iterationId).subscribe(tasks => {
      this.tasksMap[iterationId] = tasks;
    }, error => {
      console.error('Error loading tasks:', error);
    });
  }

  openAddIterationDialog(): void {
    this.dialogService.open(AdditerationComponent).onClose.subscribe(result => {
      if (result) {
        this.loadIterations();
      }
    });
  }

 openAddTaskModal(iterationId: string): void {
    this.dialogService.open(AddtasksComponent, {
      context: { iterationId }
    }).onClose.subscribe(result => {
      if (result) {
        this.createTaskForIteration(iterationId, result);
      }
    });
  }
////
/*openAddTaskDialog(iterationId: string) {
  this.currentIterationId = iterationId; // Set the current iteration ID

  this.dialogService.open(AddtasksComponent, {
    context: { iterationId: this.currentIterationId }
  }).onClose.subscribe(newTask => {
    if (newTask) {
      this.createTaskForIteration(this.currentIterationId, newTask);
    }
  });
}

  
openEditTaskDialog(task: Task, iterationId: string) {
  this.currentIterationId = iterationId;

  this.dialogService.open(AddtasksComponent, {
    context: {
      iterationId: this.currentIterationId,
      task: task
    }
  }).onClose.subscribe(updatedTask => {
    if (updatedTask) {
      this.createTaskForIteration(this.currentIterationId, updatedTask);
    }
  });
}
*/
  
/////
  createTaskForIteration(iterationId: string, taskData: Task): void {
    const taskDTO = {
      taskName: taskData.taskName,
      description: taskData.description,
      dueDate: taskData.dueDate,
      priority: taskData.priority,
      isCompleted: taskData.isCompleted,
      sprintTo: iterationId // Use the iteration ID as the sprintTo value
    };

    this.iterationService.addTaskToIteration(iterationId, taskDTO).subscribe(
      () => {
        console.log('Task added successfully');
        this.loadTasksForIteration(iterationId); // Refresh the list of iterations after adding the task
      },
      error => {
        console.error('Error adding task:', error);
      }
    );
  }

  //
 
  onEdit(event: any): void {
    const editedTask = event.newData;
    const taskId = editedTask.taskId;
  
    // Assuming iterationId is stored in editedTask, otherwise, you need to find a way to get it.
    const iterationId = editedTask.sprintTo; // Adjust this according to your data model.
  
    if (!iterationId) {
      console.error('Iteration ID is missing');
      event.confirm.reject();
      return;
    }
  
    this.taskService.updateTask(taskId, editedTask).subscribe({
      next: () => {
        this.loadTasksForIteration(iterationId); // Reload tasks to ensure the latest data is displayed
        event.confirm.resolve();
      },
      error: (error) => {
        console.error('Update failed', error);
        event.confirm.reject();
      }
    });
  }
//
onDelete(event: any): void {
  const taskId = event.data.taskId;
  const iterationId = event.data.sprintTo; // Adjust this according to your data model.

  if (!iterationId || !taskId) {
    console.error('Task ID or Iteration ID is missing');
    event.confirm.reject();
    return;
  }

  this.taskService.deleteTask(taskId).subscribe({
    next: () => {
      this.loadTasksForIteration(iterationId); // Reload tasks to ensure the latest data is displayed
      event.confirm.resolve();
    },
    error: (error) => {
      console.error('Delete failed', error);
      event.confirm.reject();
    }
  });
}

  

}
