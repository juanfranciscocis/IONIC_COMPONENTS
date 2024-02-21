import { Component, OnInit } from '@angular/core';
import {ActionSheetController, AlertController} from "@ionic/angular";

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.page.html',
  styleUrls: ['./acciones.page.scss'],
})
export class AccionesPage implements OnInit {
  constructor( private actionSheetCtrl: ActionSheetController, private alertSheetCtrl: AlertController) { }

  async presentAlert() {
    const alert = await this.alertSheetCtrl.create({
      header: 'Sure you want to delete?',
      subHeader: 'This is a delete message',
      buttons: ['OK', 'Cancel']
    });

    await alert.present();
    }




  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      backdropDismiss: false, // no se puede cerrar si se hace click fuera del action sheet
      header: 'Actions you can perform',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          handler: () => {
            this.presentAlert();
          },
          cssClass: 'color-danger',
        },
        {
          text: 'Share',
          icon: 'share-outline',
          cssClass:'.color-danger',
          data: {
            action: 'share',
          },
          handler: () => {
            //open share sheet
            if(navigator.share) {
              navigator.share({
                title: 'Share this',
                text: 'This is a shared text',
                url: 'https://ionicframework.com/docs/components'
              })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }



  ngOnInit() {
   }

}
