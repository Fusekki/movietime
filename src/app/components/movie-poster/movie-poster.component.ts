import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../classes/movie';
import { Posters } from '../../interfaces/posters';

import { MoviedbService } from '../../services/moviedb.service';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.css']
})
export class MoviePosterComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private moviedbService: MoviedbService) { }

  ngOnInit() {
    this.getMoviePosters(this.movie)
    .subscribe();
    this.log();
  }

  getMoviePosters(movie) {
    // const year = movie.releaseDate.slice(0, 4);
    // return this.moviedbService.getMoviePosters(movie.title, year);
    return this.moviedbService.getMoviePosters(movie);
  }

  log(): void {
    console.log('movie-poster component loaded.');
  }

}
