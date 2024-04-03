import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Newstab3PageRoutingModule } from './newstab3-routing.module';

import { Newstab3Page } from './newstab3.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Newstab3PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Newstab3Page]
})
export class Newstab3PageModule {}
