import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

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
  parsedMovies: Movie[] = [];
  // dataToParse: any[] = [];
  dataToParse: string[]
  posters: Observable<any>[];
  data: string[];
  poster: string;

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
      this.getArea();
      this.getMovies().subscribe(res => {
        (this.dataToParse = res);
        // this.parsedMovies = this.parseMovies(this.dataToParse);
        for (let x = 0; x < this.dataToParse.length; x++) {
          this.getMoviePosters(this.dataToParse[x])
            .subscribe(data => (console.log(data.results)));
        }
        this.movies = this.parseMovies(this.dataToParse, this.poster);
      });
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
    // this.apiService.getMovies().subscribe(movies => (this.movies = movies));
    return this.apiService.getMovies().pipe(map((data => this.dataToParse = data)));
    // this.uniqueData$ = this.movies.map(data => _.uniqBy(data, 'movies.showtimes.theatre'));
    // return this.apiService.getMovies();
  }

  parseMovies(data, posters) {
    // console.log(posters);
    return this.movieService.parseMovies(data, posters);
  }

  getMoviePosters(movie) {
    const year = movie.releaseDate.slice(0, 4);
    return this.moviedbService.getMoviePosters(movie.title, year).pipe(map((data => this.data = data)));


  }
}
