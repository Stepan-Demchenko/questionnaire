import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './containers/management/management.component';
import { EditComponent } from './containers/edit/edit.component';
import { CreateComponent } from './containers/create/create.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
