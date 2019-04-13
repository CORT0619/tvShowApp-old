import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowListComponent } from './show-list.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/pipes/pipes.module';

@NgModule({
  declarations: [
    ShowListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    ShowListComponent
  ]
})
export class ShowListModule { }
