import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { IonicModule } from '@ionic/angular';

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
