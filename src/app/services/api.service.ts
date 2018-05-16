import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ReportService } from './report.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {
  constructor(private http: HttpClient,
  private reportService: ReportService) { }

  private theatersUrl = 'api/theaters';  // URL to web api

  // Save this for when we go live

  // getMovies() {
  //   const url = 'http://data.tmsapi.com/v1.1/movies/showings?startDate=2018-05-16&zip=06820&api_key=3pb6pdpr5j5eeyucy9a5s5ua';
  //   return this.http.get(url);
  // }

  /** GET Useres from the server */
  getTheaters(): Observable<any[]> {
    return this.http.get<any[]>(this.theatersUrl)
    .pipe(
      tap(theaters => this.log(`theaters users`))
    );
  }

  
  // Logs the content to the reportService
  private log(content: string) {
    if (!content) { return; }
    this.reportService.addReport( content );

  }

}
