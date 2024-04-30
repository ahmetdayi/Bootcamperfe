import {ApplicationConfig, InjectionToken} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpInterceptor,
  provideHttpClient,
  withInterceptors, withInterceptorsFromDi
} from "@angular/common/http";
import {CustomInterceptor} from "./interceptor/custom-interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptorsFromDi(),
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true,
    },
  ]
};
