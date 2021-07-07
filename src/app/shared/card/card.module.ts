import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { QuestionFormModule } from '@shared/question-form/question-form.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    QuestionFormModule
  ]
})
export class CardModule { }
