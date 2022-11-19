import {Component} from "@angular/core";
import {Observable} from "rxjs";

import {UserService} from "../user/user.service";
import {IUser} from "../../interfaces/IUser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  user$: Observable<IUser|null>;

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    this.user$ = userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
