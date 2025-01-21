import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacManPage } from './pac-man.page';

const routes: Routes = [
  {
    path: '',
    component: PacManPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacManPageRoutingModule {}
