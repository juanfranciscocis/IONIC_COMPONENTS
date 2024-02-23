import { Component, OnInit } from '@angular/core';


interface Componentes{
  icono: string;
  name: string;
  direccion: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

    componentes:Componentes[] = [
      {
        icono:'alert-outline',
        name:'Alertas',
        direccion:'/alertas'
      },
      {
        icono:'albums-outline',
        name:'Action Sheet',
        direccion:'/acciones'
      },
      {
        icono:'accessibility-outline',
        name:'Avatar',
        direccion:'/avatar'
      }

    ]



  constructor() { }

  ngOnInit() {
  }

}
