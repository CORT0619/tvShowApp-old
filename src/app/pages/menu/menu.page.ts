import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages: Array<any> = [
    { title: 'Home', url: '/dash', icon: 'home' },
    { title: 'Search', url: '/search', icon: 'search' },
    { title: 'Bookmarks', url: '/bookmarks', icon: 'bookmark' }
  ];

  constructor() { }

  ngOnInit() {
    console.log('pages ', this.pages);
  }

}
