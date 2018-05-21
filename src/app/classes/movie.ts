import { Theater } from './theater';

// current = new Movie(movie.title, movie.releaseDate,
//   movie.genres, movie.cast, movies.directors,
//    movie.shortDescription, movie.rated, movie.advisories,
//   movie.ranTime);

export class Movie {
    constructor(t, st, rd, g, c, d, sd, r, ad, rt, p)  {
        this.title = t;
        this.subType = st;
        this.releaseDate = rd;
        this.genres = g;
        this.cast = c;
        this.directors = d;
        this.shortDescription = sd;
        this.rated = r;
        this.advisories = ad;
        this.runTime = rt;
        this.theaters = [];
        this.poster = p;
     }
    title: string;
    subType: string;
    releaseDate: string;
    genres: string[];
    cast: string[];
    directors: string[];
    shortDescription: string;
    rated: string;
    advisories: string[];
    runTime: string;
    theaters: Theater[];
    poster: string;
}
