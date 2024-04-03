import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NewsResp} from "../interfaces/interfaces";
import {doc, docData, Firestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiKey:string = "899cae8c0f814e7ebba3ba91476ef650";

  private urlApple:string = "https://newsapi.org/v2/everything?q=apple&from=2024-04-01&to=2024-04-01&sortBy=popularity&apiKey=899cae8c0f814e7ebba3ba91476ef650";
  private urlCat:string = "https://newsapi.org/v2/top-headlines?";


  constructor(private http:HttpClient,  private firestore: Firestore) { }

  getNews(){
    return this.http.get<NewsResp>(this.urlApple);
  }

  getByCategory(category:string){
    return this.http.get<NewsResp>(this.urlCat + `category=${category}&apiKey=${this.apiKey}`);
  }

  getUserProfile() {
    const userDocRef = doc(this.firestore, 'users', 'user-1');
    return docData(userDocRef);
  }


}
