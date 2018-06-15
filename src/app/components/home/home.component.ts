import { Component, OnInit } from '@angular/core';

import { UserService} from '../../services/user.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    this.log();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  log(): void {
    console.log('home component loaded.');
  }
}
