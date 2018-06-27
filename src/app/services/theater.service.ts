import { Injectable } from '@angular/core';

import { Theater, Movie } from '../classes/theater';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  theaters: Array<Theater>;

  constructor() {
    this.theaters = new Array<Theater>();
  }

  parseTheaters(showings, theaterList?) {
    // console.log(showings);
    let target = new Array<number>();
    showings.map(showing => {
      showing.showtimes.map(show => {
        const id = parseInt(show.theatre.id, 10);
        if (theaterList.indexOf(id) === -1) {
          // Theater is not in the array, push it and the movie as a new object.
          // console.log('Theater is a favorite.');
          // console.log(show.theatre.name);
          // Check if the theater has been added to the array
          let ifTheater = this.theaters.some(theater => theater.id === show.theatre.id);
          if (ifTheater) {
            let t = this.theaters.find(theater => theater.id === show.theatre.id);
            // console.log('Theater object already created:');
            // console.log(t);
            if (t.movies.some(movie => movie.title === showing.title)) {
              let m = t.movies.find(movie => movie.title === showing.title);
              // console.log('Movie object already created : ');
              // console.log(m);
              m.times.push(show.dateTime);
              // console.log('New movie object :');
              // console.log(m);
            } else {
              // console.log('Movie object being created:');
              // console.log(show);
              t.movies.push(this.createMovie(show, showing));
            }
          } else {
            // Theater is not present
            // console.log('Creating theater object and pushing to this.theaters.');
            // console.log('Theater name : ' + show.theatre.name);
            // console.log('Theater time : ' + show.dateTime);
            // console.log('Movie name : ' + showing.title);
            this.theaters.push(this.createTheater(show, showing));
            }
          } else {
            // Theater is not a favorite.  Skipping.
            // console.log('Theater is not a favorite.  Skipping: ');
            // console.log(show);
          }
        });
    });
    return this.theaters;
  }

  createTheater(s, g) {
    let m = new Movie(
      g.title,
      g.subType,
      g.releaseDate,
      g.genres,
      g.topCast,
      g.directors,
      g.shortDescription,
      g.longDescription,
      g.ratings,
      g.advisories,
      g.runTime,
      s.dateTime);
    let t = new Theater(
      s.theatre.name,
      s.theatre.id,
      m
    );
    return t;
  }

  createMovie(s,g) {
    let m = new Movie(
      g.title,
      g.subType,
      g.releaseDate,
      g.genres,
      g.topCast,
      g.directors,
      g.shortDescription,
      g.longDescription,
      g.ratings,
      g.advisories,
      g.runTime,
      s.dateTime);
    return m;
  }
}
