import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { QuestionFormModule } from '@shared/question-form/question-form.module';
import { CreateComponent } from './containers/create/create.component';
import { CardModule } from '@shared/card/card.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateComponent],
  imports: [CommonModule, CreateRoutingModule, QuestionFormModule, CardModule, ReactiveFormsModule]
})
export class CreateModule {}
