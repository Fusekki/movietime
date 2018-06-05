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
    .subscribe((poster: Posters) => {
      const p = poster.results.filter(v => this.movie.title.includes(v.title));
      if (p.length) {
        this.movie.poster = 'https://image.tmdb.org/t/p/w154/' + p[0].poster_path;
        this.movie.voteAverage = p[0].vote_average.toString();
        this.movie.popularity = Math.trunc(p[0].popularity).toString();
      } else {
        this.movie.poster = 'assets/no-image.jpg';
        this.movie.voteAverage = 'N/A';
        this.movie.popularity = 'N/A';
      }
      if (poster.results[0] !== undefined) {
        this.movie.id = poster.results[0].id;
      }
    });

  }

  getMoviePosters(movie) {
    const year = movie.releaseDate.slice(0, 4);
    return this.moviedbService.getMoviePosters(movie.title, year);
  }
}
