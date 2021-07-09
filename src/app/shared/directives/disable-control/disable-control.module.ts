import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisableControlDirective } from './disable-control.directive';



@NgModule({
  declarations: [
    DisableControlDirective
  ],
  exports: [
    DisableControlDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DisableControlModule { }
