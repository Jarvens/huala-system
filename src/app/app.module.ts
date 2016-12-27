import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NglModule} from 'ng-lightning';
import {ENV_PROVIDERS} from './environment';
import {BaiduMap} from '../../node_modules/angular2-baidu-map/src';
import {AppComponent} from './app.component';
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

/**
 *
 * 公用组件
 */
//搜索
import {SearchComponent} from './page/component/search.component';
import {ImgUploadComponent} from './page/component/img.upload.component';
//Directive

/**
 * 自定义管道
 */
//三元表达式管道
import {ThreeElementExpression} from './pipe/three.element.expression';
/**
 * 业务Service
 */
//活动
import {ActivityService} from './service/activity.service';
import {LoginService} from './service/login.service';
import {MenuService} from './service/menu.service';
import {BannerService} from './service/banner.service';
import {ChartService} from './service/chart.service';
import {SellerService} from './service/seller.service';
import {PictureService} from './service/picture.service';
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
		PictureComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
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
		PictureService
	]
})
export class AppModule {
	constructor () {
	}

}

