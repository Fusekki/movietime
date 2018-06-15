import { Component, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { Theater } from '../../classes/movie';
import { User } from '../../classes/user';
import { tap, map } from 'rxjs/operators';

import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-theatre-times',
  templateUrl: './theatre-times.component.html',
  styleUrls: ['./theatre-times.component.css']
})
export class TheatreTimesComponent implements OnInit {
  @Input() theater: Theater;
  @Input() user: User;
  // changesDetected: boolean;

  constructor(
    private ref: ChangeDetectorRef,
    private userService: UserService) {
    }

  ngOnInit() {
    this.log();
  }

  addTheater(theater: Theater) {
    if (this.user.theaters == null) {
      this.user.theaters = [theater.id];
      theater.checked = true;
    } else if (this.user.theaters.indexOf(theater.id)) {
      this.user.theaters.push(theater.id);
      theater.checked = true;
    }
    console.log('updating user.');
    console.log(this.user);
    this.userService.updateUser((this.user) as User)
    .subscribe(() => console.log('Updated User'));
  }
  removeTheater(theater: Theater) {
    if (this.user.theaters == null) {
      // console.log('list is empty. creating new one.');
      this.user.theaters = [theater.id];
      theater.checked = true;
    } else if (this.user.theaters.indexOf(theater.id) > -1) {
      const idx = this.user.theaters.indexOf(theater.id);

      this.user.theaters.splice(idx, 1);
      theater.checked = false;
    }
      // Update the database
      this.userService.updateUser((this.user) as User)
      .subscribe(() => console.log('Updated User'));
  }

  checkTheater(theater: Theater) {
    if (this.user.theaters == null) {
      return false;
    }

    if (this.user.theaters.indexOf(theater.id) > -1) {
      return true;
    }
    return false;
  }

  // checkForChanges() {
  //   console.log('Checking for changes');
  //   console.log(this.changesDetected);
  //   if (this.changesDetected) {
  //     // Commit changes to DB
  //     console.log('Changes detected');
  //     this.userService.updateUser(this.user);
  //     this.changesDetected = false;
  //   }
  // }

  log(): void {
    console.log('theater-times component loaded.');
  }



}
