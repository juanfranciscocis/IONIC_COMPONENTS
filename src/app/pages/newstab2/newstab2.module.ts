import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Newstab2PageRoutingModule } from './newstab2-routing.module';

import { Newstab2Page } from './newstab2.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Newstab2PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Newstab2Page]
})
export class Newstab2PageModule {}
