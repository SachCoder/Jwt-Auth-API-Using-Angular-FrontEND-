import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl ="http://localhost:9595";
  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get(`${this.baseUrl}/getusers`);
  }

 
}
