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
          // Create the movie
          let m = new Movie(
            showing.title,
            showing.subType,
            showing.releaseDate,
            showing.genres,
            showing.topCast,
            showing.directors,
            showing.shortDescription,
            showing.longDescription,
            showing.ratings,
            showing.advisories,
            showing.runTime);
          console.log('Movie added ');
          console.log(m);
          console.log(show);
          let t = new Theater(
            show.theatre.name,
            show.theatre.id,
            m
          );
          console.log(t);
          this.theaters.push(t);
        }
      });
    });
    return this.theaters;
  }
}
