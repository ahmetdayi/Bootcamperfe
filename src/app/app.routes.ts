import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {BootcampComponent} from "./components/bootcamp/bootcamp.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {NgModule} from "@angular/core";
import {RegisterComponent} from "./register/register.component";
import {PatikaComponent} from "./patika/patika.component";
import {CoderSpaceComponent} from "./coder-space/coder-space.component";
import {TechCareerComponent} from "./tech-career/tech-career.component";
import {TeamComponent} from "./team/team.component";

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "patika", component: PatikaComponent},
  {path: "coderspace", component: CoderSpaceComponent},
  {path: "techcareer", component: TechCareerComponent},
  {path: "profile", component: ProfileComponent},
  {path: "team", component: TeamComponent}
];

