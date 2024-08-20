import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interface } from '../Entities/Workshop';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {
  private baseUrl = 'http://localhost:8088/interface'; // Update with your actual backend URL

  constructor(private http: HttpClient) {}

  addInterface(interfaceData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, interfaceData);
  }
  getInterfaces(): Observable<Interface[]> {
    return this.http.get<Interface[]>(`${this.baseUrl}/all`);
  }

  getInterfaceById(id: string): Observable<Interface> {
    return this.http.get<Interface>(`${this.baseUrl}/interface/${id}`);
  }

  updateInterface(id: string, interfaceData: Interface): Observable<Interface> {
    return this.http.put<Interface>(`${this.baseUrl}/update/${id}`, interfaceData);
  }
}
