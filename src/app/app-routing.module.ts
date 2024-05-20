import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WatchLoungeComponent } from './watch-lounge/watch-lounge.component';
import { WatchComponent } from './watch/watch.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'watch-lounge',component:WatchLoungeComponent},
  {path:'watch/:id',component:WatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
