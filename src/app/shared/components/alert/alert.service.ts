import {Injectable} from "@angular/core";
import {NavigationStart, Router} from "@angular/router";
import {Subject} from "rxjs";

import {Alert, AlertType} from "./alert";

@Injectable({ providedIn: 'root' })
export class AlertService {

  // @ts-ignore
  alertSubject: Subject<Alert> = new Subject<Alert>();
  keepAfterRoutechange = false;

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRoutechange) {
          this.keepAfterRoutechange = false;
        } else {
          this.clear();
        }
      }
    })
  }

  success(message: string, keepAfterRoutechange = false) {
    this.alert(AlertType.SUCCESS, message, keepAfterRoutechange);
  }

  warning(message: string,  keepAfterRoutechange = false) {
    this.alert(AlertType.WARNING, message, keepAfterRoutechange);
  }

  danger(message: string,  keepAfterRoutechange = false) {
    this.alert(AlertType.DANGER, message, keepAfterRoutechange);
  }

  info(message: string,  keepAfterRoutechange = false) {
    this.alert(AlertType.INFO, message, keepAfterRoutechange);
  }

  private alert(alertType: AlertType, message: string,  keepAfterRoutechange: boolean) {
    this.keepAfterRoutechange = keepAfterRoutechange;
    this.alertSubject.next(new Alert(alertType, message));
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }

  clear() {
    // @ts-ignore
    this.alertSubject.next(null);
  }
}
