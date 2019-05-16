import { Component, OnInit, Input } from '@angular/core';
import { ShowData } from '../../../models/shows.model';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  stagger,
  query
} from '@angular/animations';

@Component({
  selector: 'show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss'],
  animations: [
    trigger('addShows', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({
              opacity: 0,
              transform: 'translate(20px, 0)'
            }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0.1 }),
          stagger(200, [
            animate('1s', style({
              transform: 'translate(0, 15px)',
              opacity: 1
          }))
          ])
        ])
      ])
    ])
  ]
})
export class ShowListComponent implements OnInit {
  @Input() shows: Array<ShowData>;
  fullOverviewVisible = false;

  constructor() {}

  ngOnInit() {
    console.log('shows ', this.shows);
  }

  selectedShow(show) {
    console.log('clicked ', show);
  }

  showFullOverview() {
    this.fullOverviewVisible = !this.fullOverviewVisible;
  }

}
