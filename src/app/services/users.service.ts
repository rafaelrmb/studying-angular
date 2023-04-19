import { Injectable } from '@angular/core';
import { OperationsCounterService } from './operations-counter.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private opCounter: OperationsCounterService) {}

  usersList = [
    {
      id: 1,
      name: 'John',
      active: true,
    },
    {
      id: 2,
      name: 'Mary',
      active: false,
    },
    {
      id: 3,
      name: 'Peter',
      active: true,
    },
    {
      id: 4,
      name: 'Jason',
      active: false,
    },
  ];

  changeUserStatus(id: number, newStatus: boolean) {
    this.usersList[id - 1].active = newStatus;
    this.opCounter.increment();
    console.log(this.opCounter.getCounter());
  }
}
