import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient,
    private config: ConfigService
  ) { }

  authenticate({ email, password }) {
    const url = 'http://localhost:3000/api/firebase/login';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };

    return this.httpClient.post(url, { email, password }, httpOptions);
      /*.pipe(
        // tap(res => console.log('res ', res)),
        // map(res => res),
        catchError(this.config.handleError)
      );*/
  }
}
