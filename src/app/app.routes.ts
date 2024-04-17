import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {BootcampComponent} from "./components/bootcamp/bootcamp.component";
import {ProfileComponent} from "./components/profile/profile.component";

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "patika", component: BootcampComponent},
  {path: "coderspace", component: BootcampComponent},
  {path: "techcareer", component: BootcampComponent},
  {path: "profile", component: ProfileComponent},
];
