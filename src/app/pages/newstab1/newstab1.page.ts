import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../services/news.service";
import {Article} from "../../interfaces/interfaces";

@Component({
  selector: 'app-newstab1',
  templateUrl: './newstab1.page.html',
  styleUrls: ['./newstab1.page.scss'],
})
export class Newstab1Page implements OnInit {

  public news:Article[] = [];

  constructor(private service:NewsService) { }

  ngOnInit() {
    this.service.getNews().subscribe((data)=>{
      console.log(data);
      this.news.push(...data.articles);
    })
  }

}
