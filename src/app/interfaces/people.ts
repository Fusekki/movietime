export class KnownFor {
  media_type: string;
  name: string;
  vote_count: number;
  vote_average: number;
  poster_path: string;
  first_air_date: string;
  popularity: number;
  grenre_ids: number[];
}

export class Actor {
  popularity: number;
  id: number;
  profile_path: string;
  name: string;
  known_for: string[];
  adult: boolean;
}


export interface People {
  page: number;
  total_results: number;
  total_pages: number;
  results: Actor[];
  adult: boolean;
}
