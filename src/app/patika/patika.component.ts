import {Component, OnInit} from '@angular/core';
import {GetPatikaResponse} from "../DTO/patika";
import {PatikaService} from "../service/patika.service";
import {CommonModule} from "@angular/common";
import {noop} from "rxjs";
import Swal from 'sweetalert2';
import {UserBootcampService} from "../service/user-bootcamp.service";
import {UserBootcampRequest} from "../DTO/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patika',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './patika.component.html',
  styleUrls: ['./patika.component.css'] // Use styleUrls instead of styleUrl
})
export class PatikaComponent implements OnInit {
  createBootcampUserRequest:UserBootcampRequest = {
    userId: '',
    baseBootcampId: ''
  }
  patikaList: GetPatikaResponse[] = [];
  isLoading: boolean = true; // Yükleme durumu izleyici

  constructor(private router: Router,private service: PatikaService, private bootcampUserService:UserBootcampService) {
  }

  ngOnInit(): void {
    this.getPatikas();
  }
  openLink(patikaId: string) {
    Swal.fire({
      title: 'Bu bootcampe katıldınız mı ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Evet',
      cancelButtonText: 'Hayır'
    }).then((result) => {
      if (result.isConfirmed) {
        this.createBootcampUserRequest.baseBootcampId=patikaId ;

        this.createUserBootcamp();
                this.router.navigate(['/patika']); // Örnek patika yoluna yönlendirme yapılabilir
      }
    });
  }
createUserBootcamp(){
            this.createBootcampUserRequest.userId= localStorage.getItem('userId');

    this.bootcampUserService.createUserBootcamp(this.createBootcampUserRequest).subscribe(
      error => {
        console.error(error);
      }
    );

}

  private getPatikas() {
    this.service.getPatikas().subscribe(
      data => {
        this.patikaList = data;
        this.isLoading = false; // Yükleme tamamlandı
        console.log(this.patikaList);
      },
      error => {
        console.error(error);
      }
    );
  }

  protected readonly noop = noop;
}
