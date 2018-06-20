import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../classes/user';
import { Theater, Movie } from '../../classes/theater';
import { Showings } from '../../interfaces/showings';

import { ApiService } from '../../services/api.service';
import { TheaterService } from '../../services/theater.service';

// import { User } from '../../classes/user';

@Component({
  selector: 'app-theater-list',
  templateUrl: './theater-list.component.html',
  styleUrls: ['./theater-list.component.css']
})
export class TheaterListComponent implements OnInit {
  // @Input() user: User;
  private _movies: Array<Movie>;
  private _theaters: Array<Theater>;
  private _user: User;

  constructor(
    private theaterService: TheaterService,
    private apiService: ApiService
  ) {
    this._theaters = new Array<Theater>();
  }

  ngOnInit() {
    this.log();
    // this.getMovies()
    // .subscribe((data: Showings[]) => {
    //   this._theaters = this.parseTheaters(data, this.user.theaters);
    // });
  }

  @Input()
  set user(user: User) {
    if (user) {
      this._user = user;
      this.getMovies()
        .subscribe((data: Showings[]) => {
          this._theaters = this.parseTheaters(data, this._user.theaters);
          console.log(this._theaters);
        });
    }

  }

  getMovies(): any {
    return this.apiService.getMovies();
  }

  parseTheaters(data, theaters): any {
    return this.theaterService.parseTheaters(data, theaters);
  }

  log(): void {
    console.log('theater-list component loaded.');
  }

}
