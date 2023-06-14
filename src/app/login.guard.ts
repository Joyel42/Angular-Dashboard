import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

export const LoginGuard = () => {
  const authService = inject(LoginService);
  const router = inject(Router);

  if(authService.getflag()== true){
    return true;
  }
  router.navigate(['/login']);
  return false;
};


export const LoginGuard2 = () => {
  const authService = inject(LoginService);
  const router = inject(Router);

  if(authService.getflag()== false){
    return true;
  }
  router.navigate(['/dashboard']);
  return false;
};