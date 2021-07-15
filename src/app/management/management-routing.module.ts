import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './containers/create/create.component';
import { EditComponent } from './containers/edit/edit.component';
import { ManageComponent } from './containers/manage/manage.component';
import { EditQuestionResolver } from './resolvers/edit-question.resolver';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    resolve: {
      question: EditQuestionResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [EditQuestionResolver]
})
export class ManagementRoutingModule {}
