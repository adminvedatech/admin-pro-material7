import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    console.log('CAN ACTIVATED');
    if (this.authService.isLoggedIn()) {
      console.log('IS LOGGED');
      return true;
      // this.router.navigate(['/customer']);
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
