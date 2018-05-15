import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';


@Component({
  selector: 'app-theater-search-results',
  templateUrl: './theater-search-results.component.html',
  styleUrls: ['./theater-search-results.component.css']
})
export class TheaterSearchResultsComponent implements OnInit {

  user: User;
  zipcode: string;
  username: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUser();
    this.getTheaters();

    this.route.paramMap.subscribe(params => {
      console.log(params.get('zipcode'));
      this.zipcode = params.get('zipcode');
    });
  }


  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('user');
    this.userService.getUser(id).subscribe(user => (this.user = user));
  }

  getTheaters(): void {
  }

}
