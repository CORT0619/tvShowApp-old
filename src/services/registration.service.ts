import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private httpClient: HttpClient,
    private config: ConfigService
  ) { }

  registerAccount(info): Observable<any> {
    const url = `${environment.apiBase}/api/firebase/register`;
    const options = {};
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    options['headers'] = headers;

    return this.httpClient.post(url, info, options).pipe(
      catchError(
        this.config.handleError
      )
    );
  }
}
