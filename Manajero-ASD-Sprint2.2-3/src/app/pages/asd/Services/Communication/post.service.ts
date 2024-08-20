import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../Entities/Workshop';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8088/app/posts';

  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPost(idPost: string) {
    return this.http.get<any>(`${this.apiUrl}/${idPost}`);
  }

  addPost(idUser: string, postData: FormData) {
    return this.http.post<any>(`${this.apiUrl}/addPost/${idUser}`, postData);
  }

  updatePost(idPost: string, post: any) {
    return this.http.put<any>(`${this.apiUrl}/updatePost/${idPost}`, post);
  }

  deletePost(idPost: string) {
    return this.http.delete(`${this.apiUrl}/deletePost/${idPost}`);
  }

  getPostsByUser(idUser: string) {
    return this.http.get<any[]>(`${this.apiUrl}/getPostsByUser/${idUser}`);
  }

  saveImage(file: File, idPost: string) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/saveImage/${idPost}`, formData);
  }

  loadImage(fileName: string) {
    return this.http.get(`${this.apiUrl}/loadImage/${fileName}`, { responseType: 'blob' });
  }

  getReactByPost(idPost: string) {
    return this.http.get<any[]>(`${this.apiUrl}/getReactByPost/${idPost}`);
  }

  getReact(idReact: string) {
    return this.http.get<any>(`${this.apiUrl}/getReact/${idReact}`);
  }

  addReact(idUser: string, idPost: string, type: string) {
    return this.http.post<any>(`${this.apiUrl}/addReact/${idUser}/${idPost}`, { type });
}


  getTypeReact(idUser: string, idPost: string) {
    return this.http.get<any>(`${this.apiUrl}/getTypeReact/${idUser}/${idPost}`);
  }

  deleteReact(idUser: string, idPost: string) {
    return this.http.delete(`${this.apiUrl}/deleteReact/${idUser}/${idPost}`);
  }

  //
  addPostType(idUser: string, postData: FormData, typePost: string): Observable<Post> {
    postData.append('typePost', typePost);
    return this.http.post<Post>(`${this.apiUrl}/addPost/${idUser}`, postData);
  }
}
