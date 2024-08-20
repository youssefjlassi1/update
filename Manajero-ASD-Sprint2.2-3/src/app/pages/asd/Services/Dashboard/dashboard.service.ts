import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'http://localhost:8088/app/dashboard';

  constructor(private http: HttpClient) { }

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
