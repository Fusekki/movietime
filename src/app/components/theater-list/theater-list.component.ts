import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../classes/user';

// import { User } from '../../classes/user';

@Component({
  selector: 'app-theater-list',
  templateUrl: './theater-list.component.html',
  styleUrls: ['./theater-list.component.css']
})
export class TheaterListComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
    this.log();
  }

  log(): void {
    console.log('theater-list component loaded.');
  }

}
