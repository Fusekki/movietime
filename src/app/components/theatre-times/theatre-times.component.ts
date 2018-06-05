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
    console.log('toggled');
    console.log(e);
    console.log(id);
  }

}
