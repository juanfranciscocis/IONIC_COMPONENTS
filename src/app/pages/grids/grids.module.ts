import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridsPageRoutingModule } from './grids-routing.module';

import { GridsPage } from './grids.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GridsPage]
})
export class GridsPageModule {}
