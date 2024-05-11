import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AuthService} from "../service/auth.service";

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.url)
    if(localStorage.getItem("jwtToken") == null || localStorage.getItem("jwtToken") == undefined ){
      if( req.url.includes("profile")){
        this.authService.getJwtTokenByRefreshToken();
      }

    }
    if (req.url.endsWith("/api/v1/auth/authenticate")) {
      return next.handle(req);
    } else {
        const localToken = localStorage.getItem("jwtToken");
        req = req.clone({headers: req.headers.set('Authorization', `Bearer ${localToken}`)});
      return next.handle(req);
    }
  }
}
