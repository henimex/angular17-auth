import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  console.log("ınterceptor")
  const token = localStorage.getItem('token') ?? '';
  console.log('first ' , token)
  request = request.clone({
    setHeaders:{
      Authorization: token ? `Token ${token}`: '',
    },
  })
  console.log('before pass ', request)
  return next(request)
};
