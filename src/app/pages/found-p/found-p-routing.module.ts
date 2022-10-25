import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoundPPage } from './found-p.page';

const routes: Routes = [
  {
    path: '',
    component: FoundPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoundPPageRoutingModule {}
