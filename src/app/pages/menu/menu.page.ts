import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages: Array<any> = [
    { title: 'Home', url: '/menu', icon: 'home' },
    { title: 'Search', url: '/menu/search', icon: 'search' },
    { title: 'Bookmarks', url: '/menu/bookmarks', icon: 'bookmark' }
  ];

  constructor(
    private menu: MenuController
  ) { }

  ngOnInit() {
  }

}
