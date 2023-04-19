import { Injectable } from '@angular/core';
import { OperationsCounterService } from './operations-counter.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private opCounter: OperationsCounterService) {}

  activeUsers = [
    { id: 0, name: 'Max', active: true },
    { id: 1, name: 'Anna', active: true },
    { id: 2, name: 'Chris', active: true },
  ];

  inactiveUsers = [
    { id: 3, name: 'John', active: false },
    { id: 4, name: 'Ted', active: false },
    { id: 5, name: 'Bowie', active: false },
  ];

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);

    this.opCounter.increment();
    this.incrementCounter();
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.incrementCounter();
  }

  incrementCounter() {
    this.opCounter.increment();
    console.log('Number of operations done: ' + this.opCounter.getCounter());
  }
}
