import { Component, OnInit } from '@angular/core';
import {Category} from "../../interfaces/interfaces";
import {NewsService} from "../../services/news.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-newstab2',
  templateUrl: './newstab2.page.html',
  styleUrls: ['./newstab2.page.scss'],
})
export class Newstab2Page implements OnInit {


  categories:Category[] = [
    {
      name: 'business',
      icon: 'business-outline',
      color: 'primary'
    },
    {
      name: 'entertainment',
      icon: 'film-outline',
      color: 'secondary'
    },
    {
      name: 'general',
      icon: 'newspaper-outline',
      color: 'tertiary'
    },
    {
      name: 'health',
      icon: 'medkit-outline',
      color: 'success'
    },
    {
      name: 'science',
      icon: 'flask-outline',
      color: 'warning'
    },
    {
      name: 'sports',
      icon: 'football-outline',
      color: 'danger'
    },
    {
      name: 'technology',
      icon: 'hardware-chip-outline',
      color: 'dark'
    }
  ];

  segmentChanged(event:any){
    console.log(event);
  }

  constructor() {


  }

  ngOnInit() {



  }

}
