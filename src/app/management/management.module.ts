import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { QuestionFormModule } from '@shared/questions-forms/question-form.module';
import { CreateComponent } from './containers/create/create.component';
import { CardModule } from '@shared/card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './containers/edit/edit.component';
import { ManageComponent } from './containers/manage/manage.component';
import { QuestionTypeSelectComponent } from './components/question-type-select/question-type-select.component';
import { SelectModule } from '@shared/select/select.module';
import { OrderByDateModule } from '@shared/pipes/order-by-date/order-by-date.module';

@NgModule({
  declarations: [CreateComponent, EditComponent, ManageComponent, QuestionTypeSelectComponent],
  imports: [CommonModule, ManagementRoutingModule, QuestionFormModule, CardModule, ReactiveFormsModule, SelectModule, FormsModule, OrderByDateModule]
})
export class ManagementModule {}
