import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Area } from '../classes/area';
import { ReportService } from './report.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class MovieService {

  constructor(private http: HttpClient,
    private reportService: ReportService) { }

  parseMovies(data: string[]): void {
    console.log(data);
  //   this.tempMovies = [];
  //   for (let movie of this.movies) {
  //     // Check if the key exists, if not create it.
  //     if (!this.tempMovies.includes(movie.title)) {
  //       this.tempMovies['title'] = movie.title;
  //     }
  //     for (let showtime of movie.showtimes) {
  //       console.log(showtime.theatre.name);
  //       if this.tempMovies[]
  //       console.log(showtime.dateTime);
  //     }
  //     // console.log(entry.showtimes);
  //   }
  //   console.log(this.tempMovies);
  // }

}
