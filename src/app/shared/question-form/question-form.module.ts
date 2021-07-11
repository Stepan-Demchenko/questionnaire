import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionFormComponent } from './question-form/question-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@shared/button/button.module';
import { InputModule } from '@shared/input/input.module';
import { AnswerQuestionFormComponent } from './answer-question-form/answer-question-form.component';
import { DisableControlModule } from '@shared/directives/disable-control/disable-control.module';

@NgModule({
  declarations: [QuestionFormComponent, AnswerQuestionFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule,
    FormsModule,
    DisableControlModule
  ],
  exports: [QuestionFormComponent, AnswerQuestionFormComponent]
})
export class QuestionFormModule {}
