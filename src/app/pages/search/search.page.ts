import { Component, OnInit } from '@angular/core';
import {search} from "ionicons/icons";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../services/data.service";
import {query} from "@angular/animations";

interface Albums{
  userId: number;
  id: number;
  title: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums:Albums[] = [];

  query:string = '';


  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(
        (albums:Albums[]) => {
          this.albums = albums;
          console.log(this.albums);
        }
    );

  }

  onSearchChange(event:CustomEvent){
    this.query = event.detail.value;
  }
}
