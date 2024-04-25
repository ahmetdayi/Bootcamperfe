import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {RegisterComponent} from "../../register/register.component";
import {CoderSpaceComponent} from "../../coder-space/coder-space.component";

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

}
