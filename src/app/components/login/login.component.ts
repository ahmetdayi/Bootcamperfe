import {Component} from '@angular/core';
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
  userId: string = "";
  authUserRequest: authUserRequest = {
    email: '',
    password: ''
  };

  user: UserResponse = {
    id: "",
    name: "",
    email: ""
  };

  constructor(private authService: AuthService, private userService: UserService) {
  }
  getToken(): void {
    this.authService.authUser(this.authUserRequest).subscribe(
      (response: AuthenticationResponse) => {
        this.authResponse = response;

        localStorage.setItem("jwtToken", response.access_token)
        localStorage.setItem("refreshToken", response.refresh_token)
        localStorage.setItem("userId", response.userResponse.id)
        this.userId = this.authResponse.userResponse.id;

      },
      error => {
        console.error('Error fetching user:', error);
      }
    );
  }


}
