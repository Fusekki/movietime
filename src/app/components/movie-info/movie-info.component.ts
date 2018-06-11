import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../classes/movie';
import { People } from '../../interfaces/people';

import { MoviedbService } from '../../services/moviedb.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
@Input() movie: Movie;

  constructor(private moviedbService: MoviedbService) { }

  ngOnInit() {
    for (let y = 0; y < this.movie.cast.length; y++) {
    this.getPeople(this.movie.cast[y], this.movie, y)
    .subscribe();
    }
    this.log();
  }

  getPeople(person, movie, idx) {
    return this.moviedbService.getPeople(person, movie, idx);
  }


  log(): void {
    console.log('movie-info component loaded.');
  }

}
