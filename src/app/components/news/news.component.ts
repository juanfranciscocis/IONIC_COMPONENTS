import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../interfaces/interfaces";
import {ActionSheetController} from "@ionic/angular";
import {Share} from "@capacitor/share";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent  implements OnInit {

  @Input() news:Article[] = [];

  constructor(
    private actionSheetCtrl:ActionSheetController
  ) {}

  ngOnInit() {}

  public actionSheetButtons = [
    {
      text: 'Share',
      data: {
        action: 'share',
      },
      handler: () => {

      }
    },
    {
      text:'Favorite',
      data: {
        action: 'favorite',
      },
  handler: () => {
    console.log('Favorite clicked');

  }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];




  openActionSheet(article:Article) {
    this.actionSheetCtrl.create({
      buttons: this.actionSheetButtons,
    }).then((actionSheet) => {
      actionSheet.present();
      actionSheet.onDidDismiss().then(async (data) => {
        console.log(data);
        if (data.role === 'cancel') {
          console.log('Cancel clicked');
        } else {
          // Share url only
          await Share.share({
            url: article.url,
          });
        }
      });
    });
  }
}
