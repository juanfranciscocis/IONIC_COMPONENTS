import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../interfaces/interfaces";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent  implements OnInit {


  @Input() article!:Article;

  constructor() { }

  ngOnInit() {}

}
