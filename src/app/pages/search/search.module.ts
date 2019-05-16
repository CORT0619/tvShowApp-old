import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchPage } from './search.page';
import { ShowListModule } from 'src/app/components/show-list/show-list.module';

const routes: Routes = [
  {
    path: 'search',
    component: SearchPage
  }
];

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/',
//     pathMatch: 'full'
//   },
//   {
//     path: '',
//     component: SearchPage,
//     children: [
//       { path: 'show', loadChildren: '../display-show/display-show.module#DisplayShowPageModule' }
//     ]
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ShowListModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
