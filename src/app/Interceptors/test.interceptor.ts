import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";
import { inject } from "@angular/core";

export const testInterceptor = (request: HttpRequest<any>, next: HttpHandlerFn):  Observable<HttpEvent<any>> => {
  console.log("test interdcpeds")
  let token: string = localStorage.getItem('token') ?? '';
  request = request.clone({
    setHeaders:{
      Authorization: `Token ${token}`,
    }
  })
  return next(request);
};
