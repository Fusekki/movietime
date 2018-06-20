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
    let target = new Array<number>();
    showings.map(showing => {
      console.log(showing.title);
      showing.showtimes.map(show => {
        let id = parseInt(show.theatre.id, 10);
        if (theaterList.indexOf(id > -1)) {
          // Check if the theater has been added to the array
          // var isPresent = this.theaters.some(function(el){ return el.id === show.theatre.id});

          let isPresent = this.theaters.some(theater => theater.id === show.theatre.id);
           console.log(isPresent);
           if (isPresent) {
             // Theater exists.  Let's check if the movie exists as well.
             isPresent = this.theaters.some(theater => theater.movies.some(movie => movie.title === showing.title));
             console.log('Movie check ' + isPresent);
             if (isPresent) {
               // Movie exists.  Push the time to the date/time array.
             }
           }
          // Theater is not in the array, push it and the movie as a new object.
          this.theaters.push(this.createTheater(show, showing));
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
    console.log('Movie added ');
    console.log(s);
    console.log(g);
    let t = new Theater(
      s.theatre.name,
      s.theatre.id,
      m
    );
    console.log(t);

    return t;
  }
}
