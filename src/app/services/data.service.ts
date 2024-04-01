import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OptMenu} from "../interfaces/interfaces";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  getMenuOpt():Observable<OptMenu[]>{
    return this.http.get<OptMenu[]>('/assets/data/menu_op.json')
  }


  getUsuarios():Observable<any>{
    console.log(this.http.get('https://jsonplaceholder.typicode.com/users'))
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbums():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }






}
