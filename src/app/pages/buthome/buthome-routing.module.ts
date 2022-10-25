import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButhomePage } from './buthome.page';

const routes: Routes = [
  {
    path: '',
    component: ButhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButhomePageRoutingModule {}
