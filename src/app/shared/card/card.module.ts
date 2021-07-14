import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { QuestionFormModule } from '@shared/questions-forms/question-form.module';
import { ButtonModule } from '@shared/button/button.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    QuestionFormModule,
    ButtonModule
  ]
})
export class CardModule { }
