import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  inactiveUsers: { id: number; name: string; active: boolean }[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.inactiveUsers = this.userService.inactiveUsers;
  }

  setToActive(id: number) {
    this.userService.setToActive(id);
  }
}
