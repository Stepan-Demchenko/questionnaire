import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByStatusPipe } from './sort-by-status.pipe';



@NgModule({
  declarations: [
    SortByStatusPipe
  ],
  exports: [
    SortByStatusPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SortByStatusModule { }
