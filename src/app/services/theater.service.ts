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
    // console.log(theaterList);
    let t = new Array<Theater>();
    let target = new Array<number>();
    this.theaters = showings.map(showing => {
      console.log(showing.title);
      showing.showtimes.map(show => {
        if (theaterList.indexOf(show.theatre.id) > -1) {
          let m = new Movie(
            show.title,
            show.subType,
            show.releaseDate,
            show.genres,
            show.topCast,
            show.directors,
            show.shortDescription,
            show.longDescription,
            show.ratings,
            show.advisories,
            show.runTime);
          t.push(show.theatre.name, show.theatre.id, []);
        }
        // theaterList.array.forEach(id => {

        // });
        console.log(show.theatre.id);

      });

      // for (let x = 0; x < theaterList.length; x++ ) {

      // console.log(showing);
      // let id = showing.showtimes.find(showtime => showtime.id === theaterList[x]);
      // console.log('Theater ' + theaterList[x]);
      // console.log(id);
      // }

    });

    // // console.log(showings);
    // this.movies = [];
    // let movie = {} as Movie;
    // for (let x = 0; x < showings.length; x++) {
    //   const showing = showings[x];
    //   if (!showing.ratings) {
    //     const ratings = new Ratings( '', 'N/A' );
    //     showing.ratings = new Array(ratings);
    //   }
    //   if (showing.entityType !== 'Movie') {
    //     console.log('showing is not a Movie.  Need to add check for Theatre Event.');
    //     console.log(showing);
    //   }
    //   movie = new Movie(
    //     showing.title,
    //     showing.subType,
    //     showing.releaseDate,
    //     showing.genres,
    //     showing.directors,
    //     showing.shortDescription,
    //     showing.longDescription,
    //     showing.ratings[0].code,
    //     showing.advisories,
    //     showing.runTime
    //   );
    //   for (const showtime of showing.showtimes) {
    //     // Check if theater exists, if not create it
    //     const s = movie.theaters.filter(t => t.name === showtime.theatre.name);
    //     let checked = false;
    //       if (theaters) {
    //         const idx: number = theaters.indexOf(showtime.theatre.id);
    //         if (idx > 0 ) {
    //           checked = true;
    //         }
    //       }
    //     if (s.length > 0) {
    //       s[0].times.push(showtime.dateTime);
    //     } else {
    //       movie.theaters.push({
    //         name: showtime.theatre.name,
    //         id: showtime.theatre.id,
    //         times: [showtime.dateTime],
    //         checked: checked
    //       });
    //     }
    //   }
    //   if (showing.topCast) {
    //       for (const actor of showing.topCast) {
    //         movie.cast.push({
    //           name: actor,
    //           profile: ''
    //         });
    //     }
    //   }
    //   this.movies.push(movie);
    // }
    // this.log('Movie parse received');
    // return this.movies;
    return this.theaters;
  }
}
