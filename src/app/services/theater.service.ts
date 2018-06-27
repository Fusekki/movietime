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
    console.log(showings);
    let target = new Array<number>();
    showings.map(showing => {
      // console.log(showing);
      showing.showtimes.map(show => {
        // console.log(show);
        const id = parseInt(show.theatre.id, 10);
        // console.log(theaterList.indexOf(id > -1));
        if (theaterList.indexOf(id) === -1) {
          // Theater is not in the array, push it and the movie as a new object.
          console.log('Theater is a favorite.');
          console.log(show.theatre.name);
          // Check if the theater has been added to the array
          let ifTheater = this.theaters.some(theater => theater.id === show.theatre.id);
          // console.log(ifTheater);
          if (ifTheater) {
            // console.log('Current list of this.theaters:');
            // console.log(this.theaters);
            // console.log('Theater is in array this.theaters.');
            // console.log('Checking if movie exists in array.');
            // console.log('Searching for a title with the name of ' + showing.title);
            // console.log('At theater with name of ' + show.theatre.name);
            let t = this.theaters.find(theater => theater.id === show.theatre.id);
            console.log('Theater object already created:');
            console.log(t);
            if (t.movies.some(movie => movie.title === showing.title)) {
              let m = t.movies.find(movie => movie.title === showing.title);
              console.log('Movie object already created : ');
              console.log(m);
              // console.log(show);
              // console.log(showings);
              m.times.push(show.dateTime);
              console.log('New movie object :');
              console.log(m);
            } else {
              console.log('Movie object being created:');
              console.log(show);
              t.movies.push(this.createMovie(show, showing));
            }
              // theater.movies.find(movie => movie.title === showing.title);
              // });
            // let test = this.theaters.find(theater => theaters.movies.length )
            // let isTheater = this.theaters.some(theater => theater.movies.some(movie => movie.title === showing.title));
            // console.log(isTheater);
            // console.log(this.theaters.find(theater => theater.movies.some(movie => movie.title === showing.title)));
            // console.log(showing.title);
            // This resolves to the id of the matching theater
            // let theaterIdx = this.theaters.find(theater => theater.id === show.theatre.id);
            // if (isTheater) { // here checking it
            //   // Theater exists.  Let's check if the movie exists as well.
            //   console.log('Theater')
            //   console.log(showing.title);
            //   console.log(theaterIdx);
            //   console.log('Movie is in array. Need to add the time to the Movie object.');
            //   console.log(show.dateTime);
            //   let movieIdx = theaterIdx.movies.find(movie => movie.title === showing.title);
            //   console.log(theaterIdx);
            //   console.log(show);
            //   console.log(movieIdx);
            //   if (!movieIdx === undefined) {
            //     let v = show.dateTime;
            //     movieIdx.times.push(v);
            //   }

              // movieIdx.times.push(show.dateTime);

              // console.log(movieIdx);
              // console.log(movieIdx.times);
            // } else {
            //   console.log('Movie is not in array.  Need to add movie to theater array.');
            //   theaterIdx.movies.push(this.createMovie(show, showing));
            // }
          } else {
            // Theater is not present

            console.log('Creating theater object and pushing to this.theaters.');
            console.log('Theater name : ' + show.theatre.name);
            console.log('Theater time : ' + show.dateTime);
            console.log('Movie name : ' + showing.title);
            this.theaters.push(this.createTheater(show, showing));
            }
          } else {
            // Theater is not a favorite.  Skipping.
            console.log('Theater is not a favorite.  Skipping: ');
            console.log(show);
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
    // console.log('Movie added ');
    // console.log(s);
    // console.log(g);
    let t = new Theater(
      s.theatre.name,
      s.theatre.id,
      m
    );
    // console.log(t);

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
    // console.log('Movie added ');
    return m;
  }
}
