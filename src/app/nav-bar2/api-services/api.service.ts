import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  constructor(private httpCliet:HttpClient) { 
    
  }
  getMenuList():any{
  const  url ="assets/menu-list/menu-list.json";
  return this.httpCliet.get(url)
  }
   
}



