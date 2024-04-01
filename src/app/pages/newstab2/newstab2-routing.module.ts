import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newstab2Page } from './newstab2.page';

const routes: Routes = [
  {
    path: '',
    component: Newstab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newstab2PageRoutingModule {}
