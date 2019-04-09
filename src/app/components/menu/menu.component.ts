import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private menu: MenuController
  ) { }

  ngOnInit() {
  }

  openFirst() {
    console.log('something happening');
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
