class Cast {
  constructor(
    sName: string,
    sProfile?: string
  ) {
    this.name = sName;
    this.profile = sProfile;
   }

   private name: string;
   private profile: string;
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
    movie: Movie
  ) {
    this.name = sName;
    this.id = nId;
    this.movies = new Array<Movie>(movie);
   }
  // times: string[];
  name: string;
  id: number;
  movies: Array<Movie>;
}

export class Movie {
  private times: Array<string>;
  public cast: Array<Cast>;
  public theaters: Array<Theater>;
  constructor(
    sTitle: string,
    sSubType: string,
    sReleaseDate: string,
    genres: Array<string>,
    sCast: Array<string>,
    directors: Array<string>,
    sShortDescription: string,
    sLongDescription: string,
    sRated: Array<string>,
    advisories: Array<string>,
    sRunTime: string,
    sTimes: string
  ) {
    this.title = sTitle;
    this.subType = sSubType;
    this.releaseDate = sReleaseDate;
    this.genres = genres;
    this.directors = directors;
    this.shortDescription = sShortDescription;
    this.longDescription = sLongDescription;
    this.rated = sRated;
    this.advisories = advisories;
    this.runTime = sRunTime;
    this.cast = new Array<Cast>();
    if (!sCast === undefined) {
        sCast.forEach(actor => this.cast.push(new Cast(actor)));
    }
    this.times = new Array<string>(sTimes);

    // this.theaters = theaters.map(theater => new Theater(theater.name, theater.id, theater.times));
    // this.cast = sCast.lit(',').map(actor => new Cast(actor));
    // sCast.forEach(actor => { this.cast.push(new Cast(actor)); });

    // });
  }
  title: string;
  subType: string;
  releaseDate: string;
  genres: string[];
  sCast: Array<string>;
  // cast: Array<Cast>;
  directors: Array<string>;
  shortDescription: string;
  longDescription: string;
  rated: Array<string>;
  advisories: Array<string>;
  runTime: string;
}






