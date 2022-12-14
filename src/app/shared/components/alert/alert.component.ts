import {Component, Input} from "@angular/core";

import {AlertService} from "./alert.service";
import {Alert, AlertType} from "./alert";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {

  @Input() timeout = 3000;
  alerts: Alert[] = [];

  constructor(
    private alertService: AlertService
  ) {
    this.alertService.getAlert().subscribe(
      (alert) => {
        if (!alert) {
          this.alerts = [];
          return;
        }

        this.alerts.push(alert);

        setTimeout(() => this.removeAlert(alert), this.timeout);
      }
    )
  }

  removeAlert(alertToRemove: Alert) {
    this.alerts = this.alerts.filter(alert => alert != alertToRemove);
  }

  getAlertClass(alert: Alert) {
    if (!alert) {
      return '';
    }

    switch (alert.alertType) {
      case AlertType.DANGER:
        return 'alert-danger';
      case AlertType.SUCCESS:
        return 'alert-success';
      case AlertType.WARNING:
        return 'alert-warning';
      case AlertType.INFO:
        return 'alert-info';
    }
  }
}
