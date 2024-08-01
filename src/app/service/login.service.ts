import {  HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }
  url="http://localhost:9595";
  generateToken(credentials:any){
    console.log(`${this.url}/token`);
    return this.http.post(`${this.url}/token`,credentials);
  }
 
  //for login user
  loginUser(token:any){
    localStorage.setItem("token",token);
    return true;
  }
  isLoggedIn(){
   let token =  localStorage.getItem("token");
   if(token==undefined || token == '' || token == null){
    return false;
   }
   else{
    return true;
   }
  }
  //for logout
  logout(){
    localStorage.removeItem("token");
    return true;
  }

  //get token
  getToken(){
   return localStorage.getItem("token");
  }

 
}
