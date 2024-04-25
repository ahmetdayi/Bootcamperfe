import {Component, OnInit} from '@angular/core';
import {GetPatikaResponse} from "../DTO/patika";
import {PatikaService} from "../service/patika.service";
import {CommonModule} from "@angular/common";

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
  patikaList: GetPatikaResponse[] = [];

  constructor(private service: PatikaService) { }

  ngOnInit(): void {
    this.getPatikas();
  }

  private getPatikas() {
    this.service.getPatikas().subscribe(
      data => {
        this.patikaList = data;
        console.log(this.patikaList);
      },
      error => {
        console.error(error);
      }
    );
  }
}
