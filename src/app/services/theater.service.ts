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
        const id = parseInt(show.theatre.id, 10);
        console.log(theaterList.indexOf(id > -1));
        if (theaterList.indexOf(id) === -1) {
          // Theater is not in the array, push it and the movie as a new object.
          console.log('Theater is a favorite.');
          // Check if the theater has been added to the array
          let isTheater = this.theaters.some(theater => theater.id === show.theatre.id);
          if (isTheater) {
            console.log('Theater is in array.');
            console.log('Checking if movie exists in array.');
            let isMovie = this.theaters.some(theater => theater.movies.some(movie => movie.title === showing.title));
            if (isMovie) {
              // Theater exists.  Let's check if the movie exists as well.
              console.log('Movie is in array. Need to add the time to the Movie object.');
            } else {
              console.log('Movie is not in array.  Need to add movie to theater array.');
              let theaterIdx = this.theaters.find(theater => theater.id === show.theatre.id);
              theaterIdx.movies.push(this.createMovie(show, showing));
            }
          } else {
            // Theater is not present
            console.log('Adding new object.');
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
    console.log('Movie added ');
    return m;
  }
}
