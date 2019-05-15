import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassShowsService {

  constructor() { }

  private shows = new Subject<any>();
  shows$ = this.shows.asObservable();

  setShows(tvshows: any[]) {
    this.shows.next(tvshows);
  }
}
