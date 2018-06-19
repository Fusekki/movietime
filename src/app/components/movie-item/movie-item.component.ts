import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../classes/movie';
import { User } from '../../classes/user';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
@Input() movie: Movie;
@Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
