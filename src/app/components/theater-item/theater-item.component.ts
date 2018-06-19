import { Component, OnInit, Input} from '@angular/core';
import { Theater, Movie} from './../../classes/movie';

@Component({
  selector: 'app-theater-item',
  templateUrl: './theater-item.component.html',
  styleUrls: ['./theater-item.component.css']
})
export class TheaterItemComponent implements OnInit {
@Input() theater: Theater;

  constructor() { }

  ngOnInit() {
  }

}
