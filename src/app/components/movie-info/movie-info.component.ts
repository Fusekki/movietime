import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../classes/movie';
import { People } from '../../interfaces/people';

import { MoviedbService } from '../../services/moviedb.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
@Input() movie: Movie;

  constructor(private moviedbService: MoviedbService) { }

  ngOnInit() {
    for (let y = 0; y < this.movie.cast.length; y++) {
      this.getPeople(this.movie.cast[y].name)
      .subscribe((people: People) => {
        const ppl = people.results[0];
        if (ppl.profile_path) {
            this.movie.cast[y].profile = 'https://image.tmdb.org/t/p/w45/' + ppl.profile_path;
        } else {
          this.movie.cast[y].profile = 'assets/no-image-sm.jpg';
        }
      });
    }
  }

  getPeople(name) {
    return this.moviedbService.getPeople(name);
  }

}
