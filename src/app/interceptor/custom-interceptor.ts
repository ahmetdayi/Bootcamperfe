import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {noop, Observable, of} from "rxjs";

@Injectable()
export class CustomInterceptor implements HttpInterceptor{

  constructor() {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const localToken = localStorage.getItem("jwtToken");

       req=req.clone({headers:req.headers.set('Authorization',`Bearer ${localToken}`)});
       return next.handle(req);


  }
}
