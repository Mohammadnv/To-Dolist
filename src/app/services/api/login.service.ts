import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { loginmodel } from './login.model';

@Injectable({providedIn: 'root'})
export class LoginusersService {
    constructor() { }
    
    http = inject(HttpClient)

    loginusers(loginuser:loginmodel){
      return  this.http.post('https://dummyjson.com/user/login',loginuser)
    }
}