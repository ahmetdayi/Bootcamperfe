import {Component} from '@angular/core';
import {GetCoderSpaceResponse} from "../DTO/coder";
import {CoderService} from "../service/coder.service";
import {TechService} from "../service/tech.service";
import {GetTechCareerResponse} from "../DTO/tech-career";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tech-career',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './tech-career.component.html',
  styleUrl: './tech-career.component.css'
})
export class TechCareerComponent {
  Techlist: GetTechCareerResponse[] = [];

  constructor(private service: TechService) {
  }

  ngOnInit(): void {
    this.getTechs();
  }

  private getTechs() {
    this.service.getTechs().subscribe(
      data => {
        this.Techlist = data;
        console.log(this.Techlist);
      },
      error => {
        console.error(error);
      }
    );
  }

}
