import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iteration } from '../Entities/Backlog/Iteration';
import { TaskDTO } from '../Entities/Backlog/TaskDTO';
import { Task } from '../Entities/Backlog/Task';
import { map } from 'rxjs/operators';
import { IterationProgress } from '../Entities/Backlog/IterationProgress';
import { IterationTaskStats } from '../Entities/Backlog/IterationTaskStats';

@Injectable({
  providedIn: 'root'
})
export class IterationService {

  private apiUrl = ' http://localhost:8088/api/iterations'; // Update with your actual backend URL

  constructor(private http: HttpClient) { }

  getIterations(): Observable<Iteration[]> {
    return this.http.get<Iteration[]>(this.apiUrl);
  }

  getIterationById(id: string): Observable<Iteration> {
    return this.http.get<Iteration>(`${this.apiUrl}/${id}`);
  }
 

  createIteration(iteration: Iteration): Observable<Iteration> {
    return this.http.post<Iteration>(this.apiUrl, iteration);
  }

  updateIteration(id: string, iteration: Iteration): Observable<Iteration> {
    return this.http.put<Iteration>(`${this.apiUrl}/${id}`, iteration);
  }

  deleteIteration(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


  addTaskToIteration(iterationId: string, task: TaskDTO): Observable<Iteration> {
    return this.http.post<Iteration>(`${this.apiUrl}/${iterationId}/tasks`, task);
  }

  getTasksByIterationId(iterationId: string): Observable<Task[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${iterationId}/tasksit`).pipe(
      map(response => response.map(item => {
        const task = new Task();
        task.taskId = item.taskId;
        task.taskName = item.taskName;
        task.description = item.description;
        task.dueDate = item.dueDate;
        task.priority=item.priority;
        task.isCompleted = item.isCompleted;
        return task;
      }))
    );
  }
 /* getTasksByIterationId(iterationId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/${iterationId}/tasksit`);
  }*/

  
  /*
  addTaskToIteration(iterationId: string, task: Task): Observable<Iteration> {
    return this.http.post<Iteration>(`${this.apiUrl}/${iterationId}/tasks`, task);
  }

    addTaskToIteration(iterationId: string, taskDTO: TaskDTO): Observable<void> {
      return this.http.post<void>(`${this.apiUrl}/iterations/${iterationId}/tasks`, taskDTO);
    }*/

///dashboard 
getTotalTaskCount(id: string): Observable<number> {
  return this.http.get<number>(`${this.apiUrl}/${id}/task-count`);
}

getCompletedTaskCount(id: string): Observable<number> {
  return this.http.get<number>(`${this.apiUrl}/${id}/completed-task-count`);
}

getProgressPercentage(id: string): Observable<number> {
  return this.http.get<number>(`${this.apiUrl}/${id}/progress`);
}

getAllIterationsProgress(): Observable<IterationProgress[]> {
  return this.http.get<IterationProgress[]>(`${this.apiUrl}/all-progress`);
}

getTaskCompletionStats(): Observable<IterationTaskStats[]> {
  return this.http.get<IterationTaskStats[]>(`${this.apiUrl}/task-completion-stats`);
}
/////////

getStats() {
  return this.http.get<any>(`${this.apiUrl}/stats`);
}

getTopPosts(limit: number = 10) {
  return this.http.get<any[]>(`${this.apiUrl}/top-posts?limit=${limit}`);
}

getMostActiveUsers(limit: number = 10) {
  return this.http.get<any[]>(`${this.apiUrl}/most-active-users?limit=${limit}`);
}

getAverageCommentsAndReacts() {
  return this.http.get<any>(`${this.apiUrl}/average-comments-reacts`);
}

}
