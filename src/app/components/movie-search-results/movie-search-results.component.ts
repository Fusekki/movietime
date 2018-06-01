import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import {MatBadgeModule} from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { ApiService } from '../../services/api.service';

import { AreaService } from '../../services/area.service';
import { MovieService } from '../../services/movie.service';
import { MoviedbService } from '../../services/moviedb.service';
import { UserService } from '../../services/user.service';
import { Area } from '../../classes/area';
import { User } from '../../classes/user';
import { Movie } from '../../classes/movie';
import { Showings } from '../../interfaces/showings';
import { People } from '../../interfaces/people';
import { Posters } from '../../interfaces/posters';


@Component({
  selector: 'app-movie-search-results',
  templateUrl: './movie-search-results.component.html',
  styleUrls: ['./movie-search-results.component.css']
})
export class MovieSearchResultsComponent implements OnInit {

  area: Area;
  user: User;
  zipcode: number;
  username: string;
  movies: Movie[];
  posters: Posters[] = [];

  constructor(
    private apiService: ApiService,
    private areaService: AreaService,
    private moviedbService: MoviedbService,
    private movieService: MovieService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUser();

    this.route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
    });
    this.getArea();
    this.getMovies()
    .subscribe((data: Showings[]) => {
      this.movies = this.parseMovies(data);
      for (let x = 0; x < this.movies.length; x++) {
        this.getMoviePosters(this.movies[x])
        .subscribe((poster: Posters) => {
          // console.log(poster);
          const p = poster.results.filter(v => this.movies[x].title.includes(v.title));
          if (p.length) {
            this.movies[x].poster = 'https://image.tmdb.org/t/p/w154/' + p[0].poster_path;
            this.movies[x].voteAverage = p[0].vote_average.toString();
            this.movies[x].popularity = Math.trunc(p[0].popularity).toString();
          } else {
            this.movies[x].poster = 'assets/no-image.jpg';
            this.movies[x].voteAverage = 'N/A';
            this.movies[x].popularity = 'N/A';
          }
        });
        for (let y = 0; y < this.movies[x].cast.length; y++) {
          console.log(this.movies[x].title);
          this.getPeople(this.movies[x].cast[y].name)
          .subscribe((people: People) => {
            const ppl = people.results[0];
            this.movies[x].cast[y].profile = 'https://image.tmdb.org/t/p/w45/' + ppl.profile_path;
          });
        }

      }
    });
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('user');
    this.userService.getUser(id).subscribe(user => (this.user = user));
  }

  getZipcode(): void {
    this.areaService.getArea(this.zipcode).subscribe(area => (this.area = area));
  }

  getArea(): void {
    this.areaService.getArea(this.zipcode).subscribe(area => (this.area = area));
  }

  getMovies() {

    return this.apiService.getMovies();
  }
  parseMovies(data) {
    return this.movieService.parseMovies(data);
  }

  getMoviePosters(movie) {
    const year = movie.releaseDate.slice(0, 4);
    return this.moviedbService.getMoviePosters(movie.title, year);
  }

  getPeople(name) {
    return this.moviedbService.getPeople(name);
  }
}
