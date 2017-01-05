import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NglModule} from 'ng-lightning';
import {ENV_PROVIDERS} from './environment';
import {BaiduMap} from '../../node_modules/angular2-baidu-map/src';
import {AppComponent} from './app.component';
import {TreeModule} from "angular2-tree-component";
//路由
import {AppRoutingModule} from './router/routing';
//导航
import {NavTopComponent} from './page/nav/nav.top.component';
import {NavLeftComponent} from './page/nav/nav.left.component';
//底部栏
import {FooterComponent} from './footer/footer.component';
//http
import {MyHttp} from './core/http';
//业务组件
import {LoginComponent} from './page/login/login.component';
import {IndexComponent} from './page/index/inde.component';
import {ActivityComponent} from './page/activtity/activity.component';
import {ChartComponent} from './page/chart/chart.component';
import {MapComponent} from './page/map/map.component';
import {BannerMainComponent} from './page/banner/banner.main.component';
import {BannerListComponent} from './page/banner/banner.list.component';
import {BannerEntryComponent} from './page/banner/banner.entry.component';
import {CardComponent} from './page/card/card.component';
import {SellerMainComponent} from './page/seller/seller.main.component';
import {SellerListComponent} from './page/seller/seller.list.component';
import {SellerDetailComponent} from './page/seller/seller.detail.component';
import {PictureComponent} from './page/system/picture/picture.component';
import {AppVersionComponent} from './page/system/app/app.version.component';
import {UserComponent} from './page/system/user/user.component';
import {OrderComponent} from './page/order/order.component';
import {MessageComponent} from './page/system/message/message.component';
import {BalanceComponent} from './page/balance/balance.component';
import {GoodsComponent} from './page/goods/goods.component';
import {GoodsCatComponent} from "./page/goods/goodsCat.component";
import {GoodsListComponent} from "./page/goods/goodsList.component";
import {SellerDataComponent} from './page/sellerdata/seller.data.component';
/**
 *
 * 公用组件
 */
import {SearchComponent} from './page/component/search.component';
import {ImgUploadComponent} from './page/component/img.upload.component';
import {BreadCrumbsComponent} from './page/component/breadcrumbs/bread.crumbs.component';
import {ToastComponent} from './page/component/toast/toast.component';
import {ConfirmPromptComponent} from './page/component/prompt/confirm.prompt.component';
//Directive

/**
 * 自定义管道
 */
//三元表达式管道
import {ThreeElementExpression} from './pipe/three.element.expression';
/**
 * 业务Service
 */
import {ActivityService} from './service/activity.service';
import {LoginService} from './service/login.service';
import {MenuService} from './service/menu.service';
import {BannerService} from './service/banner.service';
import {ChartService} from './service/chart.service';
import {SellerService} from './service/seller.service';
import {PictureService} from './service/picture.service';
import {AppVersionService} from './service/app.version.service';
import {UserService} from './service/user.service';
import {OrderService} from './service/order.service';
import {MessageService} from './service/message.service';
import {BalanceService} from './service/balance.service';
import {GoodsService} from "./service/goods.service";
import {SellerDataService} from './service/seller.data.service';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NavTopComponent,
    NavLeftComponent,
    FooterComponent,
    LoginComponent,
    IndexComponent,
    ActivityComponent,
    ChartComponent,
    MapComponent,
    BaiduMap,
    BannerMainComponent,
    BannerListComponent,
    BannerEntryComponent,
    CardComponent,
    SellerMainComponent,
    SellerListComponent,
    SellerDetailComponent,
    ThreeElementExpression,
    SearchComponent,
    ImgUploadComponent,
    PictureComponent,
    AppVersionComponent,
    BreadCrumbsComponent,
    PictureComponent,
    OrderComponent,
    UserComponent,
    MessageComponent,
    ToastComponent,
    BalanceComponent,
    ConfirmPromptComponent,
    GoodsComponent,
    GoodsCatComponent,
    GoodsListComponent,
    SellerDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TreeModule,
    NglModule.forRoot()
  ],
  providers: [
    ENV_PROVIDERS,
    MyHttp,
    ActivityService,
    LoginService,
    MenuService,
    BannerService,
    ChartService,
    SellerService,
    PictureService,
    AppVersionService,
    OrderService,
    UserService,
    MessageService,
    BalanceService,
    GoodsService,
    SellerDataService
  ]
})
export class AppModule {
  constructor() {
  }

}

