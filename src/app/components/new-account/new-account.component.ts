import { Component, Output, EventEmitter } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  @Output() createdAccount = new EventEmitter<{
    name: string;
    status: string;
  }>();

  statusTypes: string[] = ['Active', 'Inactive', 'Pending'];

  constructor(private logger: LoggingService) {}

  addAccount(accountName: string, accountStatus: string) {
    this.createdAccount.emit({
      name: accountName,
      status: accountStatus,
    });

    this.logger.logStatusChange(
      `The account ${accountName} was created. And is currently ${accountStatus}!`
    );
  }
}
