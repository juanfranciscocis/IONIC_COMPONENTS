import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccionesPageRoutingModule } from './acciones-routing.module';

import { AccionesPage } from './acciones.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AccionesPageRoutingModule,
        ComponentsModule
    ],
  declarations: [AccionesPage]
})
export class AccionesPageModule {}
