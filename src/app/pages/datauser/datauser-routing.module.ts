import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatauserPage } from './datauser.page';

const routes: Routes = [
  {
    path: '',
    component: DatauserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatauserPageRoutingModule {}
