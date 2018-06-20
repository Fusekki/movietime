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
  public cast: Array<Cast>;
  public theaters: Array<Theater>;
  constructor(
    sTitle: string,
    sSubType: string,
    sReleaseData: string,
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
    // this.theaters = theaters.map(theater => new Theater(theater.name, theater.id, theater.times));
    this.cast = cast.split(',').map(actor => new Cast(actor));
  }
}






