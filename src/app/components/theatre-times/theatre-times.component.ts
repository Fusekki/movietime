import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-theatre-times',
  templateUrl: './theatre-times.component.html',
  styleUrls: ['./theatre-times.component.css']
})
export class TheatreTimesComponent implements OnInit {
  @Input() theater: string[];
  constructor() { }

  ngOnInit() {
  }

}
