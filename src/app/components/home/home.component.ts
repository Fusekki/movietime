import { Component, OnInit } from '@angular/core';

import { User } from '../../classes/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;
  users: User[] = [];

  constructor() { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {

  }




}
