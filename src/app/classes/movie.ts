export class Movie {
    constructor(t)  {
        this.title = t;
        this.releaseDate = '';
        this.genres = [];
        this.cast = [];
        this.directors = [];
        this.shortDescription = '';
        this.rated = '';
        this.advisories = [];
        this.runTime = '';
        this.theaters = [];
     }
    title: string;
    releaseDate: string;
    genres: string[];
    cast: string[];
    directors: string[];
    shortDescription: string;
    rated: string;
    advisories: string[];
    runTime: string;
    theaters: any[];
}
