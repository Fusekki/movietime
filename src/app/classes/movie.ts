import { Theater } from './theater';

// current = new Movie(movie.title, movie.releaseDate,
//   movie.genres, movie.cast, movies.directors,
//    movie.shortDescription, movie.rated, movie.advisories,
//   movie.ranTime);

export class Movie {
    constructor(t, st, rd, g, c, d, sd, ld, r, ad, rt)  {
        this.title = t;
        this.subType = st;
        this.releaseDate = rd;
        this.genres = g;
        this.cast = c;
        this.directors = d;
        this.shortDescription = sd;
        this.longDescription = ld;
        this.rated = r;
        this.advisories = ad;
        this.runTime = rt;
        this.theaters = [];
        this.poster = null;
        this.voteAverage = null;
        this.popularity = null;
     }
    title: string;
    subType: string;
    releaseDate: string;
    genres: string[];
    cast: string[];
    directors: string[];
    shortDescription: string;
    longDescription: string;
    rated: string;
    advisories: string[];
    runTime: string;
    theaters: Theater[];
    poster: string;
    voteAverage: string;
    popularity: string;
}
