import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
}
