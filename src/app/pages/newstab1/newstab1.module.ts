import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Newstab1PageRoutingModule } from './newstab1-routing.module';

import { Newstab1Page } from './newstab1.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Newstab1PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Newstab1Page]
})
export class Newstab1PageModule {}
