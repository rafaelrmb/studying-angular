import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  constructor(private userService: UsersService) {}

  activeUsers = this.userService.activeUsers;

  setToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
