import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionFormComponent } from './question-form/question-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@shared/button/button.module';
import { InputModule } from '@shared/input/input.module';
import { SingleQuestionFormComponent } from './single-question-form/single-question-form.component';
import { MultipleQuestionFormComponent } from './multiple-question-form/multiple-question-form.component';
import { OpenQuestionFormComponent } from './open-question-form/open-question-form.component';

@NgModule({
  declarations: [QuestionFormComponent, SingleQuestionFormComponent, MultipleQuestionFormComponent, OpenQuestionFormComponent],
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputModule, FormsModule],
  exports: [QuestionFormComponent, SingleQuestionFormComponent]
})
export class QuestionFormModule {}
