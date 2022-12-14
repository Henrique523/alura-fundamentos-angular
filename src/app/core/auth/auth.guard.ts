import {Injectable} from "@angular/core";
import {UserService} from "../user/user.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userService.isLogged()) {
      this.router.navigate(['user', this.userService.getUserName()], {
        queryParams: { fromUrl: state.url }
      });
      return false;
    }

    return true;
  }
}
