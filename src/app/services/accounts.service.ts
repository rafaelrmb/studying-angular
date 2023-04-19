import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  accountsList: { name: string; status: string }[] = [];

  constructor() {}

  addAccount(account: { name: string; status: string }) {
    this.accountsList.push(account);
  }
}
