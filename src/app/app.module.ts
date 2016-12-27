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

//业务service
import {ActivityService} from './service/activity.service';
import {LoginService} from './service/login.service';
import {MenuService} from './service/menu.service';
import {BannerService} from './service/banner.service';
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
		CardComponent
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
		BannerService
	]
})
export class AppModule {
	constructor () {
	}

}

