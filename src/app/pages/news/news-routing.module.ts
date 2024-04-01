import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NewsPage } from './news.page';

// @ts-ignore
const routes: Routes = [
  {
    path: '',
    redirectTo: 'newstab2' ,
    pathMatch: 'full'
  },
  {
    path: 'newstab1',
    loadChildren: () => import('../newstab1/newstab1.module').then( m => m.Newstab1PageModule)
  },
  {
    path: 'newstab2',
    loadChildren: () => import('../newstab2/newstab2.module').then( m => m.Newstab2PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageRoutingModule {}
