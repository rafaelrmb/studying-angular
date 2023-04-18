import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @Output('serverCreated')
  createdServer = new EventEmitter<{
    type: string;
    serverName: string;
    serverContent: string;
  }>();

  onAddServer(type: string, serverName: string, serverContent: string) {
    this.createdServer.emit({
      type: type,
      serverName: serverName,
      serverContent: serverContent,
    });
  }
}
