import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
    private apiUrl = 'http://localhost:8088/app/comments';

    constructor(private http: HttpClient) { }

    getCommentsByPost(idPost: string) {
        return this.http.get<any[]>(`${this.apiUrl}/getAllCommentsByPost/${idPost}`);
    }

    getComment(idComment: string) {
        return this.http.get<any>(`${this.apiUrl}/getComment/${idComment}`);
    }

    addComment(idUser: string, idPost: string, comment: any) {
        return this.http.post<any>(`${this.apiUrl}/addComment/${idUser}/${idPost}`, comment);
    }

    updateComment(idComment: string, comment: any) {
        return this.http.put<any>(`${this.apiUrl}/updateComment/${idComment}`, comment);
    }

    deleteComment(idComment: string) {
        return this.http.delete(`${this.apiUrl}/deleteComment/${idComment}`);
    }
}
