import { Component } from '@angular/core';
import {UserService} from "../service/user.service";
import {FormsModule} from "@angular/forms";
import {CreateUserRequest} from "../DTO/user";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
createUserRequest: CreateUserRequest = {
    name: '',
    email: '',
    password: ''
  };

  showSuccess: boolean = false; // Başarı durumunu göstermek için değişken
  showError: boolean = false; // Hata durumunu göstermek için değişken

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.userService.createUser(this.createUserRequest)
      .subscribe(
        response => {
          console.log('Oluşturulan Kullanıcı:', response);
          this.showSuccess = true; // Başarılı bildirim göster
          setTimeout(() => {
            this.showSuccess = false; // 3 saniye sonra başarılı bildirimi kapat
          }, 3000);
        },
        error => {
          console.error('Kullanıcı oluşturulurken bir hata oluştu:', error);
          this.showError = true; // Hata bildirimi göster
        }
      );
  }
}
