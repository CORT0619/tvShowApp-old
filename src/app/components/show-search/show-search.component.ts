import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import TvShow from 'src/app/models/tvshow.model';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.scss']
})
export class ShowSearchComponent implements OnInit, OnDestroy {
  tvShowSubscription: Subscription = new Subscription();
  showResults: Array<TvShow> = [];
  // tvShow = '';
  model = {
    tvShow: ''
  };
  img = 'https://via.placeholder.com/150';

  constructor(
    private showService: ShowsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onKey(e: Event) {
    this.showResults = [];
    // console.log('event ', e);
    this.tvShowSubscription = this.showService.searchForShows(this.model.tvShow)
      .subscribe((show) => {
        console.log('show ', show);
        this.showResults = show.shows;
        console.log(this.showResults);
      });
  }

  goToShow(show: TvShow) {
    const showId = show ? show.show.id : null;
    localStorage.setItem('selectedShow', JSON.stringify(show));
    this.router.navigate(['/show-details', showId]);
  }

  ngOnDestroy(): void {
    if (this.tvShowSubscription) {
      this.tvShowSubscription.unsubscribe();
    }
  }
}
