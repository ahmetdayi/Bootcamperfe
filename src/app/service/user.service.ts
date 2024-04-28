import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CreateUserRequest, CreateUserResponse, UserResponse} from "../DTO/user";
import {GetPatikaResponse} from "../DTO/patika";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/user';
  private findbyid: string = "/findById";
  constructor(private http: HttpClient) { }
  createUser(request: CreateUserRequest): Observable<CreateUserResponse> {
    return this.http.post<CreateUserResponse>(`${this.baseUrl+"create"}`, request);
  }
 getUser(id: string): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.baseUrl+this.findbyid}/${id}`);
  }
}
