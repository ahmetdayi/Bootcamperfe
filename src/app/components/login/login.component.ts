import { Component } from '@angular/core';
import {RegisterComponent} from "../../register/register.component";
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {AuthenticationResponse, authUserRequest, UserResponse} from "../../DTO/user";
import {FormsModule} from "@angular/forms";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RegisterComponent,
    NgClass,
    RouterLink,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
authResponse: AuthenticationResponse | undefined;
authUserRequest: authUserRequest = {
    email: '',
    password: ''
  };
isTokenValid(){
    return this.authResponse?.access_token != null;
  }
  userId: string = "";
user: UserResponse ={
    id: "",
    name: "",
    email: ""
};
  constructor(private authService: AuthService, private userService:UserService) { }

  ngOnInit(): void {

  }

  getToken(): void {
    this.authService.authUser(this.authUserRequest).subscribe(
      (response: AuthenticationResponse) => {
        this.authResponse = response;
        localStorage.setItem("token",response.access_token)
        localStorage.setItem("userId",String(response.userResponse.id))
        localStorage.setItem("refreshToken",response.refresh_token)


// Şu anki zamanı al
const currentTimeInSeconds: number = Math.floor(Date.now() / 1000);

        this.userId=this.authResponse.userResponse.id;

      },
      error => {
        console.error('Error fetching user:', error);
      }
    );
  }



}
