import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../interfaces/interfaces";
import {InAppBrowser} from "@awesome-cordova-plugins/in-app-browser/ngx";
import {locate} from "ionicons/icons";
import {Browser} from "@capacitor/browser";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent  implements OnInit {


  @Input() article!:Article;

  constructor() { }


  async abrirNoticia() {
    await Browser.open({url: this.article.url})
  }

  ngOnInit() {}

}
