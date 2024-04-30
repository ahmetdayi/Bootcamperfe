import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {RegisterComponent} from "../../register/register.component";
import {CoderSpaceComponent} from "../../coder-space/coder-space.component";
import {AuthenticationResponse, UserResponse} from "../../DTO/user";
import {AuthService} from "../../service/auth.service";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RegisterComponent,
    CoderSpaceComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   userId: string = "";
user: UserResponse ={
    id: "",
    name: "",
    email: ""
};
islogin(){
    if (localStorage.getItem("jwtToken")) {
      // @ts-ignore
      this.userId= localStorage.getItem("userId")
      return true
    } else {
      return false
    }
}
logout() {
    localStorage.clear();


        this.router.navigate(['/']); // Burada '/' rotanızı kendi rotanıza değiştirin

  }
  // user hala bağlı mı
   constructor( private router: Router,private userService:UserService) { }
  ngOnInit(): void {
  }


}
