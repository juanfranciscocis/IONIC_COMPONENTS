import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Newstab3PageRoutingModule } from './newstab3-routing.module';

import { Newstab3Page } from './newstab3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Newstab3PageRoutingModule
  ],
  declarations: [Newstab3Page]
})
export class Newstab3PageModule {}
