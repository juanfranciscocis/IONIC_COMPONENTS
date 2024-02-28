import { Component, OnInit } from '@angular/core';



interface Datos{
  color: string;
  state: boolean;
}


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {


  datos:Datos[]= [
    {
      color:'primary',
      state:false
    },
    {
      color:'secondary',
      state:true
    },
    {
      color:'tertiary',
      state:false
    },
    {
      color:'success',
      state:true
    },
    {
      color:'warning',
      state:false
    },
    {
      color:'danger',
      state:false
    },
    {
      color:'light',
      state:true
    },
    {
      color:'medium',
      state:false
    },
    {
      color:'dark',
      state:true
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  enviar(){
    console.log(this.datos);
  }

  actualizarDatos(datos:Datos){
    console.log(datos);
  }
}
