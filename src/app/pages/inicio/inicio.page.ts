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
        icono:'newspaper-outline',
        name:'Action Sheet',
        direccion:'/acciones'
      },
      {
        icono:'accessibility-outline',
        name:'Avatar',
        direccion:'/avatar'
      },
      {
        icono:'albums-outline',
        name:'Cards',
        direccion:'/card'

      },
      {
        icono:'add-circle-outline',
        name:'Botones',
        direccion:'/botones'
      },
      {
        icono:'checkbox-outline',
        name:'Checkbox',
        direccion:'/checkbox'
      },

    ]



  constructor() { }

  ngOnInit() {
  }

  protected readonly String = String;
}
