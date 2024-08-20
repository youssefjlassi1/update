import { Priority } from "./priority.enum";

export interface TaskDTO {
    taskName: string;
    description?: string;
    dueDate: string;
    priority:Priority;
    isCompleted: boolean;
    sprintTo: string; // Assuming this is the ID or some identifier for the Iteration
  }

  
