import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import SearchShowResults from '../models/searchShowResults.model';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  searchForShows(show: string): Observable<SearchShowResults> {
    return this.httpClient.get<SearchShowResults>(`${environment.apiUrl}/shows/search?show=${show}`)
    .pipe(catchError(this.handleError))/*.toPromise<SearchShowResults>()*/;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) { // client or network error
      // TODO: introduce logging
      console.error('A clientside or network error has occurred: ', error.error);
    }

    if (error.status !== 0) { // backend returned an unsuccessful response code
      console.error('A server error has occurred ', error.error);
    }

    return throwError(() => new Error('an error has occurred; please try again later.'));
  }
}
