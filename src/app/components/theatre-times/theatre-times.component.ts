import { Component, OnInit, Input } from '@angular/core';
import { Theater } from '../../classes/movie';

@Component({
  selector: 'app-theatre-times',
  templateUrl: './theatre-times.component.html',
  styleUrls: ['./theatre-times.component.css']
})
export class TheatreTimesComponent implements OnInit {
  @Input() theater: Theater;
  constructor() { }

  ngOnInit() {
  }

}
