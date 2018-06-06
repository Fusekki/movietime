import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of, throwError } from 'rxjs';
import { catchError, map, tap, retryWhen, mergeMap, delay, take } from 'rxjs/operators';

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

    getMoviePosters(movieName, releaseDate): Observable<Posters> {
      this.incrementCount();
      // Remove the 3D from the end of title and replace the whitespaces
      movieName = movieName.replace(/[3][D]/g, '').replace(/\s/g, '%20');

      const category = this.category.replace('%%data%%', 'movie');
      const key = this.key.replace('%%data%%', this.apiKey);
      const query = this.query.replace('%%data%%', movieName);
      const page = this.page.replace('%%data%%', '1');
      const additional = this.additional.replace('%%data%%', '&primary_release_year=' + releaseDate);

      const url = this.moviesUrl + this.keyword + category + key + this.language + query + page + this.adult + additional;


      return this.http.get<Posters>(url)
      .pipe(
        tap(data => this.log('MovieDB poster received'))
      );
    }

    getPeople(person): Observable<People> {
      this.incrementCount();
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
          // return errors
          errors.pipe(
            tap(error => console.log(`Error ${error.status}.`)),
            // mergeMap((error) => (error.status === 429) ? Observable.throw(error) : Observable.toString()),
            delay(1000),
            take(2))
        ),
        tap(data => this.log('MovieDB person received'))
      );


    }

    getVideos(id): Observable<Videos> {
      this.incrementCount();
      const category = this.category.replace('%%data%%', 'movie/');
      const key = this.key.replace('%%data%%', this.apiKey);
      const additional = this.additional.replace('%%data%%', '/videos');
      const page = this.page.replace('%%data%%', '1');

      const url = this.moviesUrl + category + id + additional + key + this.language;

      return this.http.get<Videos>(url)
      .pipe(
        tap(data => this.log('MovieDB person received'))
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
      this.reportService.addReport( content );
    }
}
