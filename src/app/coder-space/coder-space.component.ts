import {Component} from '@angular/core';
import {PatikaService} from "../service/patika.service";
import {GetPatikaResponse} from "../DTO/patika";
import {GetCoderSpaceResponse} from "../DTO/coder";
import {CoderService} from "../service/coder.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-coder-space',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './coder-space.component.html',
  styleUrl: './coder-space.component.css'
})
export class CoderSpaceComponent {
  coderList: GetCoderSpaceResponse[] = [];

  constructor(private service: CoderService) {
  }

  ngOnInit(): void {
    this.getcoders();
  }

  private getcoders() {
    this.service.getCoders().subscribe(
      data => {
        this.coderList = data;
        console.log(this.coderList);
      },
      error => {
        console.error(error);
      }
    );
  }
}
