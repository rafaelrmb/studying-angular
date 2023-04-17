import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css'],
})
export class SuccessAlertComponent {
  operationId: number = Math.floor(Math.random() * 1000);
  username: string = '';
  isOperationDone: boolean = false;

  constructor() {}
  onSubmit() {
    this.isOperationDone = true;
    this.operationId = Math.floor(Math.random() * 1000);
  }
  resetUsername() {
    this.username = '';
    this.isOperationDone = false;
  }
}
