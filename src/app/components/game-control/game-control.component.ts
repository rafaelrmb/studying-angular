import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output('refreshNumber') gameStarted = new EventEmitter<number>();
  @Output() gameStopped = new EventEmitter<number>();

  ref: any;
  num: number = 1;

  startGame() {
    if (this.ref) {
      clearInterval(this.ref);
    }

    this.ref = setInterval(() => {
      this.gameStarted.emit(this.num++);
    }, 1000);
  }

  stopGame() {
    if (this.ref) {
      clearInterval(this.ref);
      this.ref = null;
    }
  }
}
