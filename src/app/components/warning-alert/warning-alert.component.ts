import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css'],
})
export class WarningAlertComponent {
  confirmButton: boolean = false;
  isConfirmed: boolean = false;

  constructor() {
    setTimeout(() => {
      this.confirmButton = true;
    }, 2000);
  }
  confirm() {
    if (confirm('Are you sure?')) {
      this.isConfirmed = true;
    }
  }
}
