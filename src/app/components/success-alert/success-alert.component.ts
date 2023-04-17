import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css'],
})
export class SuccessAlertComponent {
  operationId: number = 54678;
  username: string = '';
  isOperationDone: boolean = false;

  constructor() {}
  onSubmit() {
    this.isOperationDone = true;
  }
  resetUsername() {
    this.username = '';
    this.isOperationDone = false;
  }
}
