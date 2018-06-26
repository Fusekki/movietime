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
      // console.log(showing);
      showing.showtimes.map(show => {
        // console.log(show);
        const id = parseInt(show.theatre.id, 10);
        console.log(theaterList.indexOf(id > -1));
        if (theaterList.indexOf(id) === -1) {
          // Theater is not in the array, push it and the movie as a new object.
          console.log('Theater is a favorite.');
          console.log(show.theatre.name);
          // Check if the theater has been added to the array
          let isTheater = this.theaters.some(theater => theater.id === show.theatre.id);
          console.log(isTheater);
          if (isTheater) {
            console.log(this.theaters);
            console.log('Theater is in array.');
            console.log('Checking if movie exists in array.');
            console.log('Searching for a title with the name of ' + showing.title);
            console.log('At theater with name of ' + show.theatre.name);
            let t = this.theaters.find(theater => theater.id === show.theatre.id);
            console.log(t);
            if (t.movies.some(movie => movie.title === showing.title)) {
              t = t.movies.find(movie => movie.title === showing.title);
              console.log(t);
            } else {
              console.log('Nothing to do here.');
            }
                  // theater.movies.find(movie => movie.title === showing.title);
                // });
            // let test = this.theaters.find(theater => theaters.movies.length )
            let isMovie = this.theaters.some(theater => theater.movies.some(movie => movie.title === showing.title));
            console.log(isMovie);
            console.log(this.theaters.find(theater => theater.movies.some(movie => movie.title === showing.title)));
            console.log(showing.title);
            // This resolves to the id of the matching theater
            let theaterIdx = this.theaters.find(theater => theater.id === show.theatre.id);
            if (isMovie) { // here checking it
              // Theater exists.  Let's check if the movie exists as well.
              console.log(showing.title);
              console.log(theaterIdx);
              console.log('Movie is in array. Need to add the time to the Movie object.');
              console.log(show.dateTime);
              let movieIdx = theaterIdx.movies.find(movie => movie.title === showing.title);
              console.log(theaterIdx);
              console.log(show);
              // movieIdx.times.push(show.dateTime);
              let v = show.dateTime;
              movieIdx.times.push(v);
              // console.log(movieIdx);
              // console.log(movieIdx.times);
            } else {
              console.log('Movie is not in array.  Need to add movie to theater array.');
              theaterIdx.movies.push(this.createMovie(show, showing));
            }
          } else {
            // Theater is not present
            console.log('Adding new object.');
            this.theaters.push(this.createTheater(show, showing));
            }
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
