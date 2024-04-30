import {Component} from '@angular/core';
import {UserResponse} from "../../DTO/user";
import {UserService} from "../../service/user.service";
import {AuthService} from "../../service/auth.service";
import {TeamComponent} from "../../team/team.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    TeamComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: UserResponse = {
    id: "",
    name: "",
    email: ""
  };
userId: string = "";
  constructor(private userService:UserService,private authService:AuthService) { }

  ngOnInit(): void {
    this.getUser();

  }

 async getUser(): Promise<void> {
this.userId=localStorage.getItem("userId");
   (await this.userService.getUser(this.userId)).subscribe(
      (response: UserResponse) => {

        this.user = response;
        console.log(this.user.email);
      },
      error => {
        console.error('Error fetching user:', error);
      }
    );
  }
}
