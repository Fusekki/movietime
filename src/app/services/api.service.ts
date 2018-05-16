import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  getMovies() {
    const url = 'http://data.tmsapi.com/v1.1/movies/showings?startDate=2018-05-16&zip=06820&api_key=3pb6pdpr5j5eeyucy9a5s5ua';
    this.http.get(url)
    .subscribe(
      data => {console.log(data);
    });
  }
}
