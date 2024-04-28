import {Component} from '@angular/core';
import {UserResponse} from "../../DTO/user";
import {UserService} from "../../service/user.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
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

 getUser(): void {
    // @ts-ignore
   this.userId=localStorage.getItem("userId");
    this.userService.getUser(this.userId).subscribe(
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
