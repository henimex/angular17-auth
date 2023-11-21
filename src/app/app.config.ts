import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { authInterceptor } from "./Interceptors/auth.interceptor";
import { testInterceptor } from "./Interceptors/test.interceptor";


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([testInterceptor])),
    provideRouter(routes)
  ]
};
