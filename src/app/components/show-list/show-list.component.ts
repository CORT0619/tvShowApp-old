import { Component, OnInit, Input } from '@angular/core';
import { ShowData } from '../../../models/shows.model';

@Component({
  selector: 'show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {
  @Input() shows: Array<ShowData>;

  constructor() { }

  ngOnInit() {
    console.log('shows ', this.shows);
  }

}
