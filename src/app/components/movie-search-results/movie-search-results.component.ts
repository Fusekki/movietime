import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { ApiService } from '../../services/api.service';

import { AreaService } from '../../services/area.service';
import { MovieService } from '../../services/movie.service';
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
  movies: Movie[] = [];
  parsedMovies: Movie[] = [];
  // dataToParse: any[] = [];
  dataToParse: any;
  posters: any;

  constructor(
    private apiService: ApiService,
    private areaService: AreaService,
    private movieService: MovieService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUser();

    this.route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      this.getArea();
      this.getMovies().subscribe(_ => {
        ;
        this.parsedMovies = this.parseMovies(this.dataToParse);
        this.movies = this.getMoviePosters(this.parsedMovies);
        console.log(this.parsedMovies);
        // console.log(this.movies);
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
  }

  parseMovies(data) {
    return this.movieService.parseMovies(data);
  }

  getMoviePosters(movies) {
    return this.movieService.getMoviePosters(movies).pipe(map((data => this.posters = data)));
  }

  // this.getMbposts().subscribe(_ => {
  //   ;
  //   this.draftPosts = this.mbposts.filter(mbpost => mbpost.draft == true);
  // });

}
