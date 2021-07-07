import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './containers/management/management.component';
import { QuestionFormModule } from '@shared/question-form/question-form.module';
import { EditComponent } from './containers/edit/edit.component';
import { CreateComponent } from './containers/create/create.component';
import { CardModule } from '@shared/card/card.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ManagementComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    QuestionFormModule,
    CardModule,
    ReactiveFormsModule
  ]
})
export class ManagementModule { }
