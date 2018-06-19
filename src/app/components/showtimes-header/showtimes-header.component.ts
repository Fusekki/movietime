import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showtimes-header',
  templateUrl: './showtimes-header.component.html',
  styleUrls: ['./showtimes-header.component.css']
})
export class ShowtimesHeaderComponent implements OnInit {
@Input() zipcode: number;

  constructor() { }

  ngOnInit() {
  }

}
