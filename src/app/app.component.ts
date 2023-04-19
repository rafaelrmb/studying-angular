import { AccountsService } from './services/accounts.service';
import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private accountService: AccountsService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.accountsList = this.accountService.accountsList;
  }

  /* ------------------- HEADER CONTENT ----------------------*/
  currentPage: string = 'services';

  changeContent($event: string) {
    this.currentPage = $event;
  }

  /* ----------- BASIC AND COMPONENTS STUFF -------------------*/
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'Just a test!' },
  ];

  onAddServer(data: {
    type: string;
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: data.type,
      name: data.serverName,
      content: data.serverContent,
    });
  }

  /* ------------------- DIRECTIVES STUFF ----------------------*/
  isDataLoaded: boolean = false;
  oddNumbersArr: number[] = [];
  evenNumbersArr: number[] = [];

  updateNumbers(currentNumber: number) {
    let isEven = currentNumber % 2 === 0;

    isEven
      ? this.evenNumbersArr.push(currentNumber)
      : this.oddNumbersArr.push(currentNumber);
  }

  /* ------------------- SERVICES STUFF ----------------------*/
  accountsList: { name: string; status: string }[] = [
    { name: 'Account 1', status: 'Active' },
  ];
}
