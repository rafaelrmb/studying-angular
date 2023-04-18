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
}
