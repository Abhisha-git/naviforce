import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeApiService {
  constructor(private httpClient: HttpClient) {}
  getIconList(): any {
    const url = 'assets/icon-list/icon-list.json';
    return this.httpClient.get(url);
  }
}
