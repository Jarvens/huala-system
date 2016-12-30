//路由
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../page/login/login.component';
import {IndexComponent} from '../page/index/inde.component';
import {ActivityComponent} from '../page/activtity/activity.component';
import {ChartComponent} from '../page/chart/chart.component';
import {BannerMainComponent} from '../page/banner/banner.main.component';
import {CardComponent} from '../page/card/card.component';
import {SellerMainComponent} from '../page/seller/seller.main.component';
import {PictureComponent} from '../page/system/picture/picture.component';
import {AppVersionComponent} from '../page/system/app/app.version.component';
import {OrderComponent} from '../page/order/order.component';
import {UserComponent} from '../page/system/user/user.component';
const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'index', component: IndexComponent,
    children: [
      {path: 'act-list', component: ActivityComponent},
      {path: 'chart', component: ChartComponent},
      {path: 'banner-main', component: BannerMainComponent},
      {path: 'card-list', component: CardComponent},
      {path: 'seller-info', component: SellerMainComponent},
      {path: 'system-img-manage', component: PictureComponent},
      {path: 'app/app-version-index', component: AppVersionComponent},
      {path: 'order', component: OrderComponent},
      {path: 'system-user-manage', component: UserComponent}
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}