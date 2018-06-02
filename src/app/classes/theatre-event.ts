class Theatre {
  id: number;
  name: string;
}

class Showtime {
  barg: boolean;
  dateTime: string;
  quals: string;
  theatre: Theatre[];
}

class PreferredImage {
  uri: string;
}

class TheatreRatings {
  body: string;
  code: string;
}

export class TheatreEvent {
  entitytype: string;
  preferredImage: PreferredImage[];
  ratings: TheatreRatings[];
  showtimes: Showtime[];
  subType: string;
  title: string;
  titleLang: string;
  tmsId: string;
}
