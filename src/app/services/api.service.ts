import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Showings } from './../classes/showings';

import { ReportService } from './report.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {
  constructor(private http: HttpClient,
  private reportService: ReportService) { }

  private moviesUrl = 'api/movies';  // URL to web api
  m: number = new Date().getMonth() + 1;
  d: number = new Date().getDate() + 1;
  y: number = new Date().getFullYear();
  date: string;


  // Save this for when we go live

  // getMovies():Observable {
  //   const url = 'http://data.tmsapi.com/v1.1/movies/showings?startDate=2018-05-21&zip=06820&api_key=3pb6pdpr5j5eeyucy9a5s5ua';
  //   return this.http.get(url);
  // }


  getMovies(): Observable<Showings[]> {
    let m = this.m.toString();
    if (m.length < 2) {
      m = '0' + m;
    }
    this.date = (this.y).toString() + '-' + m  + '-' + (this.d).toString();
    console.log(this.date);
    const url = 'http://data.tmsapi.com/v1.1/movies/showings?startDate=' + this.date + '&zip=06820&api_key=3pb6pdpr5j5eeyucy9a5s5ua';
    return this.http.get<Showings[]>(url);
  }

  /** GET Useres from the server */
  // getMovies(): Observable<string[]> {
  //   return this.http.get<string[]>(this.moviesUrl)
  //   .pipe(
  //     tap(data => this.log(`Movie data received`))
  //   );
  // }

  // Logs the content to the reportService
  private log(content: string) {
    if (!content) { return; }
    this.reportService.addReport( content );
  }

}
