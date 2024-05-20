import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule}from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBar2Component } from './nav-bar2/nav-bar2.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WatchLoungeComponent } from './watch-lounge/watch-lounge.component';
import { DataSellComponent } from './data-sell/data-sell.component';
import { WatchComponent } from './watch/watch.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBar2Component,
    HomeComponent,

    ShopComponent,
    ContactUsComponent,
    WatchLoungeComponent,
    DataSellComponent,
    WatchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
