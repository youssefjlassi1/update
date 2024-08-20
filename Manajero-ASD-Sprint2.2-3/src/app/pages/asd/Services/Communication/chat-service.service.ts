// src/app/services/communication/chat-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ChatMessage } from '../../Entities/chat-message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'http://localhost:8088/app/chat';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<{ id: string, name: string }[]> {
    return this.http.get<{ id: string, name: string }[]>(`${this.apiUrl}/users`)
      .pipe(catchError(this.handleError));
  }

  getMessages(senderId: string, receiverId: string): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(`${this.apiUrl}/messages?senderId=${senderId}&receiverId=${receiverId}`)
      .pipe(catchError(this.handleError));
  }

  sendMessage(message: ChatMessage): Observable<ChatMessage> {
    return this.http.post<ChatMessage>(`${this.apiUrl}/send`, message)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMsg = 'Something bad happened; please try again later.';
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
      if (error.status === 0) {
        errorMsg = 'Unable to connect to the backend server.';
      } else if (error.status === 404) {
        errorMsg = 'Requested resource not found.';
      } else if (error.status === 403) {
        errorMsg = 'Forbidden request.';
      }
    }
    return throwError(errorMsg);
  }
}
