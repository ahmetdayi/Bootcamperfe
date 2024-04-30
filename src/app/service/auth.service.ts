import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
  AuthenticationResponse,
  authUserRequest,

} from "../DTO/user";
import {firstValueFrom, Observable} from "rxjs";
import {jwtDecode} from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/v1/auth/';
  private REFRESH_TOKEN = this.baseUrl+"refresh-token"

  constructor( private http: HttpClient) {
  }

  authUser(request: authUserRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl + "authenticate"}`, request);
  }

  //backenden refreshtoken isteği atıyor
  // voide döndür
  public refreshToken(): Observable<any> {
        console.log()
        return this.http.post<any>(this.REFRESH_TOKEN,new HttpHeaders({
            'Authorization': `Bearer ${localStorage.getItem("refreshToken")}`
        }));
    }

// refresh tokeni alıp yeni tokenle değiştiriyor
  public async getJwtTokenByRefreshToken() {
    let promise = await firstValueFrom(this.refreshToken());

    localStorage.setItem("jwtToken", promise["access_token"]);
    localStorage.setItem("refreshToken", promise["refresh_token"]);
    return {accessToken: localStorage.getItem("access_token"), refreshToken: localStorage.getItem("refresh_token")}
  }

 public tokenHeader = async (): Promise<HttpHeaders> => {

    let jwtToken: string = localStorage.getItem("jwtToken")
    const decodeTokenExp: number = jwtDecode(jwtToken).exp;
    const currentTime: number = Date.now() / 1000;
    const isExpired: boolean = decodeTokenExp < currentTime

    if (!isExpired) {
      jwtToken = localStorage.getItem("jwtToken")
      return new HttpHeaders({
        'Authorization': `Bearer ${jwtToken}`
      })
    } else {
      //TODO bu methodu beklemek gerekiyor sonra localstorage dememe lazim
      await this.getJwtTokenByRefreshToken()
      jwtToken = localStorage.getItem("jwtToken")
      return new HttpHeaders({
        'Authorization': `Bearer ${jwtToken}`
      })
    }

  }



}
