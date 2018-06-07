import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import {MatBadgeModule} from '@angular/material/badge';
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
import { Movie, Theater } from '../../classes/movie';
import { Showings } from '../../interfaces/showings';


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
    });
    this.getArea();
    this.getMovies()
    .subscribe((data: Showings[]) => {
      this.movies = this.parseMovies(data, this.user.theaters);
    });
  }

  // getUser(): void {
  //   const id = +this.route.snapshot.paramMap.get('user');
  //   this.userService.getUser(id).subscribe(user => (this.user = user));
  // }

  // Temporary function while outside api calls are enabled
  getUser() {
    this.user = new User(0, 'janedoe@gmail.com', 'Jane', 'Doe', '06902');
    this.user.theaters.push('5884');
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

  parseMovies(data, theaters) {
    return this.movieService.parseMovies(data, theaters);
  }

}
