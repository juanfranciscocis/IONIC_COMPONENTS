import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Observable} from "rxjs";
import {IonList} from "@ionic/angular";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any> | undefined;

  @ViewChild(IonList) ionList: IonList | undefined;

  constructor(private dataService:DataService) {}

  ngOnInit() {
   this.usuarios = this.dataService.getUsuarios();
  }

  delete(item: any) {
    console.log('Borrando', item);
    console.log('users', this.usuarios)
    console.log('ionList', this.ionList)
    this.ionList?.closeSlidingItems();
  }

  edit(item: any) {
    this.ionList?.closeSlidingItems();
  }

  success(item: any) {
    this.ionList?.closeSlidingItems();

  }
}
