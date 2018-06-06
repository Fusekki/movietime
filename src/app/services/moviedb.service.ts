import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retryWhen, mergeMap, delay, take } from 'rxjs/operators';

import { Movie } from './../classes/movie';

import { People } from './../interfaces/people';
import { Posters } from './../interfaces/posters';
import { Videos } from './../interfaces/videos';

import { ReportService } from './report.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MoviedbService {
  constructor(private http: HttpClient,
    private reportService: ReportService) { }

  private apiKey = 'aeadd6ead4ce89db28f122189aaa9ed7';
  // private moviesUrl = 'api/moviedb';  // URL to web api
  // private moviesUrl = 'https://api.themoviedb.org/3/';
  private moviesUrl = 'https://api.themoviedb.org/3/';
  private keyword = 'search/';
  private category = '%%data%%';
  private key = '?api_key=%%data%%';
  private language = '&language=en-US';
  private query = '&query=%%data%%';
  private page = '&page=%%data%%';
  private adult = '&include_adult=false';
  private additional = '%%data%%';

  private count: number;


  // Save this for when we go live

  getMoviePosters(movie): Observable<Posters> {
    // this.incrementCount();
    // Remove the 3D from the end of title and replace the whitespaces
    const movieName = movie.title.replace(/[3][D]/g, '').replace(/\s/g, '%20');
    const year = movie.releaseDate.slice(0, 4);

    const category = this.category.replace('%%data%%', 'movie');
    const key = this.key.replace('%%data%%', this.apiKey);
    const query = this.query.replace('%%data%%', movieName);
    const page = this.page.replace('%%data%%', '1');
    const additional = this.additional.replace('%%data%%', '&primary_release_year=' + year);

    const url = this.moviesUrl + this.keyword + category + key + this.language + query + page + this.adult + additional;


    return this.http.get<Posters>(url)
      .pipe(
        retryWhen(errors =>
          errors.pipe(
            tap(error => console.log(`Error ${error.status}. Will retry in 10 seconds.`)),
            delay(10000))
        ),
        tap((poster: Posters) => {
          const p = poster.results.filter(v => movie.title.includes(v.title));
          if (p.length) {
            movie.poster = 'https://image.tmdb.org/t/p/w154/' + p[0].poster_path;
            movie.voteAverage = p[0].vote_average.toString();
            movie.popularity = Math.trunc(p[0].popularity).toString();
          } else {
            movie.poster = 'assets/no-image.jpg';
            movie.voteAverage = 'N/A';
            movie.popularity = 'N/A';
          }
          if (poster.results[0] !== undefined) {
            movie.id = poster.results[0].id;
          }
        }),
        tap(data => this.log('MovieDB poster received'))
      );

  }

  getPeople(person): Observable<People> {
    // this.incrementCount();
    // Remove the 3D from the end of title and replace the whitespaces
    person = person.replace(/\s/g, '%20');

    const category = this.category.replace('%%data%%', 'person');
    const key = this.key.replace('%%data%%', this.apiKey);
    const query = this.query.replace('%%data%%', person);
    const page = this.page.replace('%%data%%', '1');

    const url = this.moviesUrl + this.keyword + category + key + this.language + query + page + this.adult;

    return this.http.get<People>(url)
      .pipe(
        retryWhen(errors =>
          errors.pipe(
            tap(error => console.log(`Error ${error.status}. Will retry in 10 seconds.`)),
            delay(10000))
        ),
        tap(data => this.log('MovieDB person received'))
      );


  }

  getVideos(id): Observable<Videos> {
    // this.incrementCount();
    const category = this.category.replace('%%data%%', 'movie/');
    const key = this.key.replace('%%data%%', this.apiKey);
    const additional = this.additional.replace('%%data%%', '/videos');
    const page = this.page.replace('%%data%%', '1');

    const url = this.moviesUrl + category + id + additional + key + this.language;

    return this.http.get<Videos>(url)
      .pipe(
        retryWhen(errors =>
          errors.pipe(
            tap(error => console.log(`Error ${error.status}. Will retry in 10 seconds.`)),
            delay(10000))
        ),
        tap(data => this.log('MovieDB Video received'))
      );

  }

  private incrementCount() {
    if (!this.count) {
      this.count = 0;
    }
    this.count++;
    console.log('This is call #' + this.count);
  }


  // Logs the content to the reportService
  private log(content: string) {
    if (!content) { return; }
    this.reportService.addReport(content);
  }
}
