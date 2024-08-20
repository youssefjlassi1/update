/*export class Iteration {
  id?: string;
  sprintName!: string;
  sprintDescription?: string;
  startDate!: Date;
  endDate!: Date;
  estimation!: number;
  isCompleted!: boolean;
  tasks!: Task;
}*/

import { Task } from "./Task";

export class Iteration {
  id?: string;
  sprintName!: string;
  sprintDescription?: string;
  startDate!: string;
  endDate!: string;
  estimation!: number;
  isCompleted!: boolean;
  tasks: Task[] = []; // Use an array of Task
}
