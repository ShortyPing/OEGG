import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {BackendService} from "../services/backend/backend.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private backendService: BackendService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise<boolean>(resolve => {

      this.backendService.user.subscribe({
        next: (user) => {
          if(user) {
            resolve(true);
            return;
          }
          this.backendService.requestUser().subscribe({
            next: user => {
              if(user) {
                resolve(true)
                this.backendService.user.next(user);
                return;
              }
              this.backendService.logout(true)
              resolve(false)
            },
            error: () => {
              this.backendService.logout(true)
              resolve(false);
            }
          })
        },
        error: () => {
          this.backendService.logout(true)
          resolve(false)
        }
      })

    });
  }

}
