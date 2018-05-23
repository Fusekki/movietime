import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Showings } from '../interfaces/showings';
import { Movie } from '../classes/movie';
import { Theater } from '../classes/theater';
import { Area } from '../classes/area';
import { ReportService } from './report.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class MovieService {

  movies: Movie[] = [];
  moviePosters: string[] = [];
  movieposter: string;

  constructor(private http: HttpClient,
    private reportService: ReportService) { }

  parseMovies(showings) {
    // console.log(data);
    this.movies = [];
    // let theaters = [];
    let movie = {} as Movie;
    for (let x = 0; x < showings.length; x++) {
      movie = new Movie(
        showings[x].title,
        showings[x].subType,
        showings[x].releaseDate,
        showings[x].genres,
        showings[x].topCast,
        showings[x].directors,
        showings[x].shortDescription,
        showings[x].rated,
        showings[x].advisories,
        showings[x].runTime
      );
      for (let showtime of showings[x].showtimes) {
        // Check if theater exists, if not create it
        const s = movie.theaters.filter(t => t.name === showtime.theatre.name);
        if (s.length > 0) {
          s[0].times.push(showtime.dateTime);
          // console.log(showtime.dateTime);
        } else {
          movie.theaters.push({
            name: showtime.theatre.name,
            times: [showtime.dateTime]
          });
        }
      }
      this.movies.push(movie);
    }
    this.log('Movie parse received');
    return this.movies;
  }
  // parseMovies(data, posters) {
  //   // console.log(data);
  //   console.log(posters);
  //   this.movies = [];
  //   // let theaters = [];
  //   let current = {} as Movie;
  //   for (let x = 0; x < data.length; x++) {
  //     // console.log(posters[x]);
  //     let dd = this.findPoster(data[x].title, data[x].releaseData, posters);
  //     current = new Movie(data[x].title, data[x].subType, data[x].releaseDate,
  //       data[x].genres, data[x].topCast, data[x].directors,
  //        data[x].shortDescription, data[x].rated, data[x].advisories,
  //       data[x].runTime, dd);
  //     for (let showtime of data[x].showtimes) {
  //       // Check if theater exists, if not create it
  //       const t = current.theaters.filter(z => z.name === showtime.theatre.name);
  //       if (t.length > 0) {
  //         t[0].times.push(showtime.dateTime);
  //       } else {
  //         current.theaters.push({
  //           name: showtime.theatre.name,
  //           times: [showtime.dateTime]
  //         });
  //       }

  //     }
  //     this.movies.push(current);
  //   }
  //   this.log('Movie parse received');
  //   return this.movies;
  // }

  findPoster(title, date, posterObj) {
    console.log(posterObj);
    // console.log(typeof(posterObj));
    for (const x of posterObj) {
        console.log(posterObj[x]);
    }
    // for (let result in posterObj.results) {
    //   if (result.release_date == date) {
    //     return result.poster_path;
    //   }
    // }
  }

  // Logs the content to the reportService
  private log(content: string) {
    if (!content) { return; }
    this.reportService.addReport( content );
  }

}
