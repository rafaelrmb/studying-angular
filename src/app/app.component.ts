import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'Just a test!' },
  ];
  isDataLoaded: boolean = false;
  oddNumbersArr: number[] = [];
  evenNumbersArr: number[] = [];
  currentPage: string = 'services';

  updateNumbers(currentNumber: number) {
    let isEven = currentNumber % 2 === 0;

    isEven
      ? this.evenNumbersArr.push(currentNumber)
      : this.oddNumbersArr.push(currentNumber);
  }

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

  changeContent($event: string) {
    this.currentPage = $event;
  }
}
