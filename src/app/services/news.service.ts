import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NewsResp} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url:string = "https://newsapi.org/v2/everything?q=apple&from=2024-04-01&to=2024-04-01&sortBy=popularity&apiKey=899cae8c0f814e7ebba3ba91476ef650";

  constructor(private http:HttpClient) { }

  getNews(){
    return this.http.get<NewsResp>(this.url);
  }

}
