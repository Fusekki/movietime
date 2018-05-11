import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;
  zipPattern = /^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] *\d[A-Z]\d)$/;

  zipcode = new FormControl('', [Validators.required, Validators.pattern(this.zipPattern)]);

  getErrorMessage() {
    return this.zipcode.hasError('required') ? 'You must enter a value' :
    this.zipcode.hasError('pattern') ? 'Not a valid zipcode' : '';
  }

  constructor(private userService: UserService,
  private router: Router,
private route: ActivatedRoute,
private fb: FormBuilder) { }
  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

}
