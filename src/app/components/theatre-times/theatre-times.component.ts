import { Component, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { Observable ,  of } from 'rxjs';
import { Theater } from '../../classes/movie';
import { User } from '../../classes/user';

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
    // this.changesDetected = false;
    // console.log(this.changesDetected);
    // const nIntervId = setInterval(this.checkForChanges, 10000);
    // console.log(this.theater);
  }

  // toggle(e, id): void {
  //   console.log('toggled');
  //   // console.log(e);
  //   // console.log(id);
  //   if (e.checked) {
  //     this.addTheater(id);
  //   } else {
  //     this.removeTheater(id);
  //   }
  //   this.ref.detectChanges();
  // }

  addTheater(theater) {
    // console.log('adding theater');
    // console.log(this.user.theaters);
    if (this.user.theaters == null) {
      this.user.theaters = [theater.id];
      // Note: Need to find a way to update all theaters with this checkmark
      theater.checked = true;
      // console.log(this.user.theaters);
    } else if (this.user.theaters.indexOf(theater.id)) {
            // console.log('Theater not in list.');
      // console.log('Adding theater ' + theater.id);
      this.user.theaters.push(theater.id);
      theater.checked = true;
    } else {
      // console.log('Already in list');
    }
    console.log('Theater added.   Changes detected.');
    // this.changesDetected = true;
    // Update the database
    console.log('updatind user.');
    console.log(this.user);
    this.userService.updateUser(this.user);

  }

  removeTheater(theater) {
    // console.log('Removing theater');
    // console.log(theater);
    // console.log(this.user.theaters);

    if (this.user.theaters == null) {
      // console.log('list is empty. creating new one.');
      this.user.theaters = [theater];
      // Note: Need to find a way to update all theaters with this checkmark
      theater.checked = true;
      // console.log(this.user.theaters);
    } else if (this.user.theaters.indexOf(theater.id) > -1) {
      const idx = this.user.theaters.indexOf(theater.id);
      // console.log(idx);
      // console.log('Removing theater ' + theater.id);
      this.user.theaters.splice(idx, 1);
      theater.checked = false;
    } else {
      // console.log(this.user.theaters.indexOf(theater.id));
        // console.log('Not in list');
    }
    // this.changesDetected = true;
        // Update the database
        console.log('updatind user.');
        console.log(this.user);
        this.userService.updateUser(this.user);
  }

  checkTheater(theater) {
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
