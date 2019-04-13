import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { IonicModule } from '@ionic/angular';
import { ShowListModule } from '../show-list/show-list.module';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
