import { AccountsService } from './../../services/accounts.service';
import { Component } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  statusTypes: string[] = ['Active', 'Inactive', 'Pending'];

  constructor(
    private logger: LoggingService,
    private accountService: AccountsService
  ) {}

  addAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount({
      name: accountName,
      status: accountStatus,
    });

    this.logger.logStatusChange(
      `The account ${accountName} was created. And is currently ${accountStatus}!`
    );
  }
}
