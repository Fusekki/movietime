import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import {
  FormGroup,
  // FormControl,
  // FormGroupDirective,
  // NgForm,
  Validators,
  FormBuilder
  // AbstractControl
} from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User;
  zipForm: FormGroup;
  zipPattern = /^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] *\d[A-Z]\d)$/;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getUser();
    this.createForm();
  }


  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => (this.user = user));
  }

  createForm() {
    this.zipForm = this.fb.group({
      zipcode: ['', [Validators.required, Validators.pattern(this.zipPattern), Validators.minLength(5), Validators.maxLength(10)]]
    });
  }

  getErrorMessage() {
    console.log(this.zipForm.controls.zipcode);
    return this.zipForm.controls.zipcode.hasError('required')
      ? 'You must enter a value'
      : this.zipForm.controls.zipcode.hasError('minlength')
        ? 'Too short'
        : this.zipForm.controls.zipcode.hasError('maxlength')
          ? 'Too Long'
          : this.zipForm.controls.zipcode.hasError('pattern')
            ? 'Not a valid zipcode'
            : '';
  }

  onSubmit(): void {
    this.router.navigate(['./' + this.user.id + '/theaters']);
  }
}
