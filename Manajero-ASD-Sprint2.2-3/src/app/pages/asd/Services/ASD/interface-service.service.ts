import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Interfaceasd } from '../../Entities/ASDINTER/Interfaceasd ';
@Injectable({
  providedIn: 'root'
})
export class InterfaceService {
  private baseUrl = 'http://localhost:8088/app/asdprojects';

  constructor(private http: HttpClient) {}

  getProjectsByUserId(userId: string): Observable<Interfaceasd[]> {
    return this.http.get<Interfaceasd[]>(`${this.baseUrl}/user/${userId}`).pipe(
      catchError(this.handleError)
    );
  }

  createProject(data: Partial<Interfaceasd>): Observable<Interfaceasd> {
    return this.http.post<Interfaceasd>(`${this.baseUrl}`, data).pipe(
      catchError(this.handleError)
    );
  }

  getProjectById(id: string): Observable<Interfaceasd> {
    return this.http.get<Interfaceasd>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updateProject(id: string, data: Partial<Interfaceasd>): Observable<Interfaceasd> {
    return this.http.put<Interfaceasd>(`${this.baseUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  deleteProject(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
