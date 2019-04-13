import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private httpClient: HttpClient,
    private config: ConfigService
  ) { }

  retrieveShowOverview(show) {
    const url = `${environment.apiBase}/api/show/overview/${show}`;
    const options = {};
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    options['headers'] = headers;
    options['withCredentials'] = true; // TODO: add to interceptor instead

    return this.httpClient.get(url, options).pipe(
      catchError(
        this.config.handleError
      )
    );
  }
}
