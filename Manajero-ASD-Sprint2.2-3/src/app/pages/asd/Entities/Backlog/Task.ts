/*export interface Task {
  taskId: string;
  taskName: string;
  description: string;
  createdDate: Date;
  dueDate: Date;
  status: string;
  priority: string;
  isCompleted: boolean;
  iterationId: string; // Reference to Iteration by ID
}*/
import { Iteration } from "./Iteration";
import { Priority } from "./priority.enum";
export class Task {
  taskId?: string;
  taskName: string;
  description?: string;
  dueDate: string;
  priority: Priority;
  isCompleted: boolean;
  sprintTo?: Iteration;

  constructor() {
    this.taskName = '';
    this.description = '';
    this.dueDate = '';
    this.priority=Priority.LOW; 
    this.isCompleted = false;
  }
}



