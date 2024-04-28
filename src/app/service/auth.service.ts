import { Injectable } from '@angular/core';
import {jwtDecode} from "jwt-decode";

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
  AuthenticationResponse,
  authUserRequest,
  CreateUserRequest,
  CreateUserResponse,
  UserResponse
} from "../DTO/user";
import {first, Observable} from "rxjs";
import {GetPatikaResponse} from "../DTO/patika";
import {tap} from "rxjs/operators";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl = 'http://localhost:8080/auth/';
  private jwtHelper = new JwtHelperService();
  private REFRESH_TOKEN=  "refresh-token"
  private refreshTokenTime: number  = 10;

  constructor(private http: HttpClient) { }
  authUser(request: authUserRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl+"authenticate"}`, request);
  }
  public refreshToken(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}${this.REFRESH_TOKEN}`, {}, {
        headers: new HttpHeaders({
            'Authorization': `Bearer ${localStorage.getItem("refreshToken")}`
        })
    }).pipe(
        tap(response => {
            // İşlem tamamlandığında yapılacak işlemler
        })
    );
}
}
