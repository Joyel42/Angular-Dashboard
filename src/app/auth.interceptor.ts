import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Intercepted ...........");
    const token = window.localStorage.getItem('token');
    const headers: HttpHeaders = new HttpHeaders().set('Authorization', "Bearer "+ token);
    const authreq = request.clone({headers});
    return next.handle(authreq);
  }
}
