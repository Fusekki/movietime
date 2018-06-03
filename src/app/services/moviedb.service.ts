import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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
    private moviesUrl = 'https://api.themoviedb.org/3/';
    // Save this for when we go live

    getMoviePosters(movieName, releaseDate): Observable<Posters> {
      // Remove the 3D from the end of title and replace the whitespaces
      movieName = movieName.replace(/[3][D]/g, '').replace(/\s/g, '%20');
      const url = this.moviesUrl + 'search/movie?api_key=' + this.apiKey + '&language=en-US&query=' + movieName
       + '&page=1&include_adult=false&primary_release_year=' + releaseDate;
      // console.log(url);
      return this.http.get<Posters>(url)
      .pipe(
        tap(data => this.log('MovieDB poster received'))
      );
    }

    getPeople(person): Observable<People> {
      // Remove the 3D from the end of title and replace the whitespaces
      person = person.replace(/\s/g, '%20');
      const url = this.moviesUrl + 'search/person?api_key=' + this.apiKey + '&language=en-US&query=' + person
       + '&page=1&include_adult=false';
      // console.log(url);
      return this.http.get<People>(url)
      .pipe(
        tap(data => this.log('MovieDB person received'))
      );
    }

    getVideos(id): Observable<Videos> {
      const url = this.moviesUrl + 'movie/' + id + '/videos?api_key=' + this.apiKey + '&language=en-US';
      return this.http.get<Videos>(url)
      .pipe(
        tap(data => this.log('MovieDB person received'))
      );
    }



    // Logs the content to the reportService
    private log(content: string) {
      if (!content) { return; }
      this.reportService.addReport( content );
    }
}
