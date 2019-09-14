import { ErrorToast } from './error-toast.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ErrorToast
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorToast
  ]
})
export class ErrorToastModule { }
