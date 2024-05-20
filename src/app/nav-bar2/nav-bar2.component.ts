import { Component, OnInit } from '@angular/core';
import { ApiService } from './api-services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar2',
  templateUrl: './nav-bar2.component.html',
  styleUrls: ['./nav-bar2.component.scss'],
})
export class NavBar2Component implements OnInit {
  menulist: any;
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getMenuList().subscribe((data: any) => {
      this.menulist = data.menulist;
    });
  }
}
