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
  newZip: string;

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
    const id = +this.route.snapshot.paramMap.get('user');
    this.userService.getUser(id).subscribe(user => (this.user = user));
  }

  createForm() {
    this.zipForm = this.fb.group({
      zipcode: ['', [Validators.required, Validators.pattern(this.zipPattern), Validators.minLength(5), Validators.maxLength(10)]]
    });
  }

  getErrorMessage() {
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
    if (this.zipForm.valid) {
      console.log('Form Submitted!');
    }

    this.newZip = this.zipForm.value.zipcode;

    this.userService.updateUser({
      _id: this.user._id,
      email: this.user.email,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      zipcode: this.newZip,
      theaters: this.user.theaters
    } as User)
      .subscribe(() => this.redirect());
  }

  redirect(): void {
    this.router.navigate(['./' + this.user._id + '/movies/' + this.newZip]);
  }
}
