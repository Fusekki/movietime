import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';
// import {mergeMap} from 'rxjs/operators';
// import { Observable } from 'rxjs/Observable';

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
  movies: Movie[] = [];
  parsedMovies: Movie[] = [];
  // dataToParse: any[] = [];
  dataToParse: any;
  posters: string[] = [];
  data: any;
  poster: any;

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
      this.getMovies().subscribe(_ => {
        // this.parsedMovies = this.parseMovies(this.dataToParse);
        for (let x = 0; x < this.dataToParse.length; x++ ) {
          this.getMoviePosters(this.dataToParse[x])
          // .pipe(map(res => res))
          .subscribe(data =>  { this.poster = data; this.posters.push(this.poster); } );
          // console.log(this.posters);
        }
        // console.log(this.posters.length);
        this.movies = this.parseMovies(this.dataToParse, this.posters);
      });
      // this.getMovies()
      //   .subscribe(data => (this.dataToParse = data));
      //       // .pipe(map((res: Response) => res.json()))
      //       // .pipe(map((data => this.dataToParse = data)));
      //       this.parsedMovies = this.parseMovies(this.dataToParse);
      //       // .pipe(mergeMap(movie => this.http.get(customer.contractUrl))
      //       this.getMoviePosters(this.parsedMovies)
      //       // .pipe(mergeMap(movies => this.getMoviePosters(movies)))
      //       .map((poster: Response) => this.posters.push(poster));
            // .subscribe(res => this.contract = res);

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
    console.log(posters);
    return this.movieService.parseMovies(data, posters);
  }

  getMoviePosters(movie) {
    // console.log(movies);
    // for (let x = 0; x < movies.length; x++) {
        console.log(movie.title);
       return this.moviedbService.getMoviePosters(movie.title).pipe(map((data => this.data = data)));
    // }
    // return this.posters;
    // return this.posters;
    // return this.movieService.getMoviePosters(movies);

  }
  // this.getMbposts().subscribe(_ => {
  //   ;
  //   this.draftPosts = this.mbposts.filter(mbpost => mbpost.draft == true);
  // });

}
