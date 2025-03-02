import { Component, inject, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { LoginusersService } from '../../services/api/login.service';
import { Subscriber } from 'rxjs';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';


@Component({
    
    templateUrl: "login.Component.html",
    imports:[FormsModule],
    providers:[LoginusersService]

})

export class LoginpageComponent implements OnInit {
    constructor() { }

    router = inject(Router)
    loginservice = inject(LoginusersService)
    username!:string
    password!:string

    handelsubmit(){
        this.password
        this.username

        this.loginservice.loginusers(
            {
            username : this.username,
            password : this.password,
            expiresInMins : 60,
        }).subscribe({
            next: (response) => {
                console.log("Login successful:", response);
                debugger
            },
            error: (error) => {
                console.error("Login error:", error);
                alert('Username or password is not valid');
                debugger
            },
            complete: () => {
                console.log("Login request completed");
                this.router.navigate(['/todo']);
                debugger
            }
        });
        

    }

    ngOnInit() { }
}