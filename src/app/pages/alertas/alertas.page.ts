import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  constructor(private alertController:AlertController) { }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  }

  async alertaButtons(){
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message Hola Mundo',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        },
      ]
    });
    await alert.present();
  }

  async alertaInput(){
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Ingrese el nombre'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok', data);
          }
        },
      ],
    });
    await alert.present();
  }

  async radioAlert(){
    const alert = await this.alertController.create({
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true,
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2',
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3',
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4',
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5',
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6',
          value: 'value6',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok', data);
          }
        },
      ],

  });
  await alert.present();
  }

  ngOnInit() {
  }

}
