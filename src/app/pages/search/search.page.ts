// import { ShowData, Show } from './../../../models/shows.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchService } from 'src/services/search.service';
import { Subscription } from 'rxjs';
import { ShowData, Show } from 'src/models/shows.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage implements OnInit {
  shows: Array<ShowData>;
  searchSubscription: Subscription;
  @ViewChild('searchBoxInput') searchBox;

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  search(term) {
    this.searchService
      .retrieveShowOverview(term.value)
      .subscribe((response: Show) => {
        console.log('show ', response);
        this.shows = response.data;
        term.value = '';
        localStorage.setItem('shows', JSON.stringify(response.data));
      });
  }
}
