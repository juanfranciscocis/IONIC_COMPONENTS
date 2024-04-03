import { Component, OnInit } from '@angular/core';
import {Category} from "../../interfaces/interfaces";
import {NewsService} from "../../services/news.service";
import {DataService} from "../../services/data.service";
import {Observable} from "rxjs";
import {DocumentData} from "@angular/fire/compat/firestore";


interface User {
  name: string;
  lastname: string;
}

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
  user:User | undefined;
  constructor(private service:NewsService) {
    this.service.getUserProfile().subscribe((data)=>{
      if(data){
        this.user = data as User;
        console.log(this.user.name);
      }
    }
    );




  }

  ngOnInit() {




  }

}
