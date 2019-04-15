import { ShowData, Show } from './../../../models/shows.model';
import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  shows: Array<ShowData>;
  searchSubscription: Subscription;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  search(term) {
    this.searchService.retrieveShowOverview(term.value).subscribe((response: Show) => {
      console.log('show ', response);
      this.shows = response.data;
      term.value = '';
      localStorage.setItem('shows', JSON.stringify(response.data));
    });
  }

}
