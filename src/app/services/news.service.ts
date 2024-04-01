import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NewsResp} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getNews(){
    return this.http.get<NewsResp>("https://newsapi.org/v2/everything?q=tesla&from=2024-03-01&sortBy=publishedAt&apiKey=899cae8c0f814e7ebba3ba91476ef650");
  }

}
