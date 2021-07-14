import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { QuestionFormModule } from '@shared/questions-forms/question-form.module';
import { CreateComponent } from './containers/create/create.component';
import { CardModule } from '@shared/card/card.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './containers/edit/edit.component';
import { ManageComponent } from './containers/manage/manage.component';
import { QuestionTypeSelectComponent } from './components/question-type-select/question-type-select.component';

@NgModule({
  declarations: [CreateComponent, EditComponent, ManageComponent, QuestionTypeSelectComponent],
  imports: [CommonModule, ManagementRoutingModule, QuestionFormModule, CardModule, ReactiveFormsModule]
})
export class ManagementModule {}
