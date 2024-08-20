/*import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Sprint } from '../../Entities/Backlog/Iteration';
@Injectable({
  providedIn: 'root'
})
export class SprintService {
    private apiUrl = 'http://localhost:8080/app/sprints';

    constructor(private http: HttpClient) { }

    getSprints(): Observable<Sprint[]> {
        return this.http.get<Sprint[]>(`${this.apiUrl}/allSprints`); 
      }
     
      createTask(sprint: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/addSprint`, sprint);
      }
    
      deleteSprint(id: string) {
        return this.http.delete(`${this.apiUrl}/delete/${id}`);
      }
     
       updateSprint(id: string, sprint: any): Observable<Sprint> {
        return this.http.put<any>(`${this.apiUrl}/update/${id}`, sprint);
      }
      
      getSprint(id: string) {
        return this.http.get(`${this.apiUrl}/getsprint/${id}`);
      }
}*/