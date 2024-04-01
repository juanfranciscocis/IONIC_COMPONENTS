import {Observable} from "rxjs";
import {OptMenu} from "./interfaces/interfaces";
import {Component, OnInit} from "@angular/core";
import {DataService} from "./services/data.service";
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes!: Observable<OptMenu[]>;


  constructor(private data:DataService) {
    this.componentes = this.data.getMenuOpt();
  }


  ngOnInit() {

  }

  protected readonly close = close;


}
