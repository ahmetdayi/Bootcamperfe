import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {PatikaComponent} from "../../patika/patika.component";
import {CoderSpaceComponent} from "../../coder-space/coder-space.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    PatikaComponent,
    CoderSpaceComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
