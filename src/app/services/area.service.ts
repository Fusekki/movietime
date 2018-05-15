import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Area } from '../classes/area';
import { ReportService } from './report.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AreaService {

  private areasUrl = 'api/areas';  // URL to web api

  constructor(private http: HttpClient,
  private reportService: ReportService) { }

    /** GET Areaes from the server */
    getareas (): Observable<Area[]> {
      return this.http.get<Area[]>(this.areasUrl)
        .pipe(
          tap(areas => this.log(`fetched areas`))
        );
    }

    /** GET Area by id. Will 404 if id not found */
    getArea(id: number): Observable<Area> {
      const url = `${this.areasUrl}/${id}`;
      return this.http.get<Area>(url).pipe(
        tap(_ => this.log(`fetched Area id=${id}`))
      );
    }

    /** PUT: update the Area on the server */
    updateArea (area: Area): Observable<any> {
      return this.http.put(this.areasUrl, area, httpOptions).pipe(
        tap(_ => this.log(`updated Area id=${area.id}`))
      );
    }

  // Logs the content to the reportService
  private log(content: string) {
    if (!content) { return; }
    this.reportService.addReport( content );

  }
}
