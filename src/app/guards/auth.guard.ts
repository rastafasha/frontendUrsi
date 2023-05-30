import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AccountService } from '../services/account.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private accountService: AccountService,
    private router: Router){}

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return this.accountService.validarToken()
    .pipe(
      tap( estaAutenticado => {
        if(!estaAutenticado){
          this.router.navigateByUrl('/login');
        }
      })
    );
  }



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){

    return this.accountService.validarToken()
    .pipe(
      tap( estaAutenticado => {
        if(!estaAutenticado){
          this.router.navigateByUrl('/login');
        }
      })
    );
  }

}
