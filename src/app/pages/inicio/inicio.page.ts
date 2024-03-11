import { Component, OnInit } from '@angular/core';
import {OptMenu} from "../../interfaces/interfaces";
import {DataService} from "../../services/data.service";
import {Observable} from "rxjs";



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

     componentes!: Observable<OptMenu[]>;



  constructor(private data:DataService) {
    this.componentes = this.data.getMenuOpt();
  }

  ngOnInit() {


  }

  protected readonly String = String;
}
