import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/dash',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'dash', loadChildren: '../dashboard/dashboard.module#DashboardPageModule' },
      { path: 'search', loadChildren: '../search/search.module#SearchPageModule' },
      { path: 'bookmarks', loadChildren: '../bookmarks/bookmarks.module#BookmarksPageModule' },
      { path: 'display-show', loadChildren: '../display-show/display-show.module#DisplayShowPageModule' }
    ]
  },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
