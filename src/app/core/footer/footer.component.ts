import {Component, OnInit} from "@angular/core";
import {UserService} from "../user/user.service";
import {Observable} from "rxjs";
import {IUser} from "../../interfaces/IUser";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  // @ts-ignore
  user$: Observable<IUser | null>;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }

}
