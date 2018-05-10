import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../classes/user';
import { ReportService } from './report.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private usersUrl = 'api/users';  // URL to web api

  constructor(private http: HttpClient,
  private reportService: ReportService) { }

    /** GET Useres from the server */
    getUsers (): Observable<User[]> {
      return this.http.get<User[]>(this.usersUrl)
        .pipe(
          tap(users => this.log(`fetched users`))
        );
    }

  // Logs the content to the reportService
  private log(content: string) {
    if (!content) { return; }
    this.reportService.addReport( content );

  }

}

