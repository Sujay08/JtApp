import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContestantsPage } from './contestants.page';

const routes: Routes = [
  {
    path: '',
    component: ContestantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContestantsPageRoutingModule {}
