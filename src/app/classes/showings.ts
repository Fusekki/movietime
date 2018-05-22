import { PreferredImage} from './preferred-image';
import { Ratings } from './ratings';
import { Showtime } from './showtime';
import { QualityRating } from './quality-rating';
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
