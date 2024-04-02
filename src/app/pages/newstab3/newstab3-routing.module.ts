import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newstab3Page } from './newstab3.page';

const routes: Routes = [
  {
    path: '',
    component: Newstab3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newstab3PageRoutingModule {}
