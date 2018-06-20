import { createHostListener } from "@angular/compiler/src/core";

class Cast {
  constructor(
    sName: string,
    sProfile?: string
  ) { }
}

class Video {
  constructor(
    nId: number,
    sIso_639_1: string,
    sIso_3166_1: string,
    sKey: string,
    sName: string,
    sSite: string,
    nSize: number,
    sType: string
  ) { }
}

export class Theater {
  constructor(
    sName: string,
    nId: number,
    movies: Array<Movie>
  ) { }
  // times: string[];
}

export class Movie {
  // public cast: Array<Cast>;
  public theaters: Array<Theater>;
  constructor(
    sTitle: string,
    sSubType: string,
    sReleaseDate: string,
    genres: Array<string>,
    cast: string,
    directors: Array<string>,
    sShortDescription: string,
    sLongDescription: string,
    sRated: string,
    advisories: Array<string>,
    sRunTime: string
    // theaters: Array<any>,
    // sPoster: string,
    // sVoteAverage: string,
    // sPopularity: string,
    // videos: Array<any>[]
  ) {
    this.title = sTitle;
    this.subType = sSubType;
    this.releaseData = sReleaseDate;
    this.genres = genres;
    this.cast = cast;
    this.directors = directors;
    this.shortDescription = sShortDescription;
    this.longDescription = sLongDescription;
    this.rated = sRated;
    this.advisories = advisories;
    this.runTime = sRunTime;
    // this.theaters = theaters.map(theater => new Theater(theater.name, theater.id, theater.times));
    // this.cast = cast.split(',').map(actor => new Cast(actor));
    console.log(this.cast);
  }
  title: string;
  subType: string;
  releaseData: string;
  genres: string[];
  cast: string;
  directors: Array<string>;
  shortDescription: string;
  longDescription: string;
  rated: string;
  advisories: Array<string>;
  runTime: string;

}






