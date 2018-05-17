import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { ApiService } from '../../services/api.service';

import { AreaService } from '../../services/area.service';
import { UserService } from '../../services/user.service';
import { Area } from '../../classes/area';
import { User } from '../../classes/user';


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
  movies: any[];
  uniqueData$;

  constructor(
    private apiService: ApiService,
    private areaService: AreaService,
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
        // this.uniqueData$ = new Set(this.movies.map(movie => movie.showtimes));
        this.uniqueData$ = this.movies.filter((value, index, array) => !array.filter((v, i) => JSON.stringify(value) == JSON.stringify(v) && i < index).length);

        for (let entry of this.uniqueData$) {
          console.log(entry);
        }
        console.log(this.uniqueData$);
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

  // getmovies(): void {
  //   this.apiService.getMovies()
  //   .subscribe(data => { console.log(data); });
  // }

  getMovies() {
    // this.apiService.getMovies().subscribe(movies => (this.movies = movies));
    return this.apiService.getMovies().pipe(map((movies => this.movies = movies)));
    // this.uniqueData$ = this.movies.map(data => _.uniqBy(data, 'movies.showtimes.theatre'));
  }

  // this.getMbposts().subscribe(_ => {
  //   ;
  //   this.draftPosts = this.mbposts.filter(mbpost => mbpost.draft == true);
  // });

}
