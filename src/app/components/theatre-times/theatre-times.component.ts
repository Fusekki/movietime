import { Component, OnInit, Input } from '@angular/core';
import { Theater } from '../../classes/movie';
import { User } from '../../classes/user';

@Component({
  selector: 'app-theatre-times',
  templateUrl: './theatre-times.component.html',
  styleUrls: ['./theatre-times.component.css']
})
export class TheatreTimesComponent implements OnInit {
  @Input() theater: Theater;
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

  toggle(e, id): void {
    // console.log('toggled');
    // console.log(e);
    // console.log(id);
    if (e.checked) {
      this.addTheater(id);
    } else {
      this.removeTheater(id);
    }
  }

  addTheater(id) {
    if (this.user.theaters.indexOf(id)) {
      console.log('Theater not in list.');
      console.log('Adding theater ' + id);
      this.user.theaters.push(id);
    } else {
      console.log('Already in list');
    }
  }

  removeTheater(id) {
    const idx = this.user.theaters.indexOf(id);
    if (id) {
      console.log('Removing theater ' + id);
      this.user.theaters.splice(idx, 1);
    } else {
      console.log('Not in list');
    }

  }



}
