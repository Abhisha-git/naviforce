import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasellService {

  constructor(private httpCliet:HttpClient) {
    
   }
   getWatchlist():any{
    const url="assets/watch-list/watch-list.json"
    return this.httpCliet.get(url)

  }
}

