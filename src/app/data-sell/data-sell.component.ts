import { AfterViewInit, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DatasellService } from './service/datasell.service';

@Component({
  selector: 'app-data-sell',
  templateUrl: './data-sell.component.html',
  styleUrls: ['./data-sell.component.scss'],
})
export class DataSellComponent implements AfterViewInit {
  @Input() watchList: any;
  constructor(private api: DatasellService, private router: Router) {}
  ngAfterViewInit(): void {
    console.log(this.watchList);
  }
  navigate(id: number): void {
    console.log(id);
    this.router.navigate([`watch/${id}`]);
  }
}
