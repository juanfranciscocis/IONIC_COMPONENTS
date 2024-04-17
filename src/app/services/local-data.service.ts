import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage-angular";
import {Article} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  articles:Article[] = [];


    private _storage: Storage | null = null;

  constructor(private storage:Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async setArticle(article: Article) {
    this.articles.unshift(article); //inserta al inicio del arreglo
    await this._storage?.set('favorites', this.articles);
  }

    public async loadFavorites() {
        const articles = await this._storage?.get('favorites');
        if(articles){
        this.articles = articles;
        }
    }
}
