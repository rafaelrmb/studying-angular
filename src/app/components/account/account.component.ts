import { Component, Input, HostBinding } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input('newAccount') newAccount!: { name: string; status: string };
  @HostBinding('class') cssClass: string = 'bg-green-200';

  constructor(private logger: LoggingService) {}

  changeAccountStatus(newStatus: string) {
    this.newAccount.status =
      newStatus.substring(0, 1).toUpperCase() + newStatus.substring(1);
    this.logger.logStatusChange(`Account status changed to ${newStatus}`);

    if (newStatus === 'active') {
      this.cssClass = 'bg-green-200';
    } else if (newStatus === 'pending') {
      this.cssClass = 'bg-orange-200';
    } else {
      this.cssClass = 'bg-red-200';
    }
  }
}
