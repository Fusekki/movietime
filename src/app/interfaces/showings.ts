export class PreferredImage {
  width: string;
  height: string;
  uri: string;
  category: string;
  text: string;
  primary: string;
}

export class Ratings {
  constructor (b, c) {
    this.body = b;
    this.code = c;
  }
  body: string;
  code: string;
}

export class QualityRating {
  ratingsBody: string;
  value: string;
}

export class Theatre {
  id: string;
  name: string;
}


export class Showtime {
  theatre: Theatre[];
  dateTime: string[];
  barg: boolean;
  ticketURI: string;
}


export interface Showings {
  id: number;
  tmsId: string;
  rootId: number;
  subType: string;
  title: string;
  releaseYear: string;
  releaseDate: string;
  titleLang: string;
  descriptionLang: string;
  entityType: string;
  genres: string[];
  longDescription: string;
  shortDescription: string;
  topCast: string[];
  directors: string[];
  officialUrl: string;
  qualityRating: QualityRating;
  ratings: Ratings;
  advisories: string;
  runTime: string;
  preferredImage: PreferredImage;
  showtimes: Showtime[];
}
