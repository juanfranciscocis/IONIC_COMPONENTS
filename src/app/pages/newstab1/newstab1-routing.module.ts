import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newstab1Page } from './newstab1.page';

const routes: Routes = [
  {
    path: '',
    component: Newstab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newstab1PageRoutingModule {}
