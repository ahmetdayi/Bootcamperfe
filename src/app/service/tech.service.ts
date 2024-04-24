import { Injectable } from '@angular/core';
import {GetCoderSpaceResponse} from "../DTO/coder";
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs";
import {GetTechCareerResponse} from "../DTO/tech-career";

@Injectable({
  providedIn: 'root'
})
export class TechService {
 private baseUrl = "http://127.0.0.1:8000/techcareer/";
 private Coders: GetCoderSpaceResponse[] = [];
 private urlPlus: String = "getScrapeBootcamp";
  constructor(private httpclient:HttpClient) { }
  getCoders() {
  return this.httpclient.get<GetTechCareerResponse>(this.baseUrl+this.urlPlus).pipe(
    tap(response => console.log('Raw API response:', response)),
    map(response => response.coderspace)//burdaki response.coderspace apidekiyle aynı olmalı yoksa undefined dönüyor
  );
}

}
