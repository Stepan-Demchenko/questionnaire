import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ButtonModule } from '@shared/button/button.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavComponent
  ],
  exports: [
    NavComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ]
})
export class NavModule { }
