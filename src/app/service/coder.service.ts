import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs";
import {GetCoderSpaceResponse} from "../DTO/coder";

@Injectable({
  providedIn: 'root'
})
export class CoderService {
 private baseUrl = "http://127.0.0.1:8000/coderspace/";
 private Coders: GetCoderSpaceResponse[] = [];
 private urlPlus: String = "getScrapeBootcamp";
  constructor(private httpclient:HttpClient) { }
  getCoders() {
  return this.httpclient.get<GetResponseCoders>(this.baseUrl+this.urlPlus).pipe(
    tap(response => console.log('Raw API response:', response)),
    map(response => response.coderspace)//burdaki response.coderspace apidekiyle aynı olmalı yoksa undefined dönüyor
  );
}

}
interface GetResponseCoders {
  coderspace: GetCoderSpaceResponse[];
}
