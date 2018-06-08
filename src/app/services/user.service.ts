import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../classes/user';
import { ReportService } from './report.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  // private usersUrl = 'api/users';  // URL to web api
  private usersUrl = 'http://localhost:8000/users';

  constructor(private http: HttpClient,
  private reportService: ReportService) { }

    /** GET Useres from the server */
    getUsers (): Observable<User[]> {
      return this.http.get<User[]>(this.usersUrl)
        .pipe(
          tap(users => this.log(`fetched users`)),
          tap(users => console.log(users))
        );
    }

    /** GET User by id. Will 404 if id not found */
    getUser(id: string): Observable<User> {
      const url = `${this.usersUrl}/${id}`;
      return this.http.get<User>(url).pipe(
        tap(_ => this.log(`fetched User _id=${id}`))
      );
    }

    /** PUT: update the User on the server */
    updateUser (user: User): Observable<any> {
      this.usersUrl += '/' + user._id;
      // let body = new URLSearchParams();

      const putOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
      };
      const body = new HttpParams()
      .set('email', user.email)
      .set('firstName', user.firstName)
      .set('lastName', user.lastName)
      .set('zipcode', user.zipcode)
      return this.http.put(this.usersUrl, body.toString(), putOptions).pipe(
        tap(_ => this.log(`updated User _id=${user._id}`))
      );
    }

  // Logs the content to the reportService
  private log(content: string) {
    if (!content) { return; }
    this.reportService.addReport( content );

  }

}

