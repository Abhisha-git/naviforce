import { Component, OnInit } from '@angular/core';
import { HomeApiService } from './home-api/home-api.service';
import { DatasellService } from '../data-sell/service/datasell.service';
// import { ApiService } from '../nav-bar2/api-services/api.service';
// import { IconList } from '../menu-list/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  iconList: any;
  watchList: any;
  constructor(private api: HomeApiService, private watchApi: DatasellService) {}
  ngOnInit(): void {
    this.getIconList();
    this.getWatchList();
  }
  getIconList(): void {
    this.api.getIconList().subscribe((data: any) => {
      this.iconList = data.IconList;
    });
  }
  getWatchList(): void {
    this.watchApi.getWatchlist().subscribe((data: any) => {
      this.watchList = data.watchList;
    });
  }
}
