import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ReportService } from './report.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MoviedbService {
  constructor(private http: HttpClient,
    private reportService: ReportService) { }

    private apiKey = 'aeadd6ead4ce89db28f122189aaa9ed7';
    private moviesUrl = 'api/moviedb';  // URL to web api

    // Save this for when we go live

    getMoviePosters(movieName) {

      const url = 'https://api.themoviedb.org/3/search/movie?api_key='
       + this.apiKey + '&language=en-US&query=' + movieName + '&page=1&include_adult=false';
      return this.http.get(url);
    }

    /** GET Useres from the server */
    getMovies(): Observable<string[]> {
      return this.http.get<string[]>(this.moviesUrl)
      .pipe(
        tap(data => this.log(`MovieDB data received`))
      );
    }

    // Logs the content to the reportService
    private log(content: string) {
      if (!content) { return; }
      this.reportService.addReport( content );
    }
}
