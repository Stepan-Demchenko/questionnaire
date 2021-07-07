import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionFormComponent } from './question-form/question-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@shared/button/button.module';
import { InputModule } from '@shared/input/input.module';
import { AnswerQuestionFormComponent } from './answer-question-form/answer-question-form.component';

@NgModule({
  declarations: [
    QuestionFormComponent,
    AnswerQuestionFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule
  ],
  exports: [
    QuestionFormComponent,
    AnswerQuestionFormComponent
  ]
})
export class QuestionFormModule { }
