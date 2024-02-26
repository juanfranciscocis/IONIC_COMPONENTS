import { Component, OnInit } from '@angular/core';


interface Avatars{
  img: string;
  name: string;
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  avatars:Avatars[] = [
    {
      img:'./assets/images/avatar.webp',
      name:'Juan'
    },
    {
      img:'./assets/images/avatar.webp',
      name:'Cisneros'
    },
    {
      img:'./assets/images/avatar.webp',
      name:'Tomas'
    },
    {
      img:'./assets/images/avatar.webp',
      name:'Bernardo'
    },

    ];


  constructor() { }

  ngOnInit() {
  }

}
