import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './containers/create/create.component';
import { EditComponent } from './containers/edit/edit.component';
import { ManageComponent } from './containers/manage/manage.component';

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
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule {}
