import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import { IonicModule } from '@ionic/angular';
import {NewsComponent} from "./news/news.component";
import {NewsDetailComponent} from "./news-detail/news-detail.component";



@NgModule({
  declarations: [
    HeaderComponent,
    NewsComponent,
    NewsDetailComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    NewsComponent,
  ]
})
export class ComponentsModule { }
