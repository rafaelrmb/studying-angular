import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OperationsCounterService {
  constructor() {}

  public counter: number = 0;

  public increment() {
    this.counter++;
  }

  public getCounter() {
    return this.counter;
  }
}
