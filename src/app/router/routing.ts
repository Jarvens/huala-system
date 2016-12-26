//路由
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../page/login/login.component';
import {IndexComponent} from '../page/index/inde.component';
import {ActivityComponent} from '../page/activtity/activity.component';
import {ChartComponent} from '../page/chart/chart.component';
import {BannerComponent} from '../page/banner/banner.component';
import {CardComponent} from '../page/card/card.component';
const routes: Routes = [
	{path: '', redirectTo: '/login', pathMatch: 'full'},
	{path: 'login', component: LoginComponent},
	{
		path: 'index', component: IndexComponent,
		children: [
			{path: 'act-list', component: ActivityComponent},
			{path: 'chart', component: ChartComponent},
			{path: 'banner-main', component: BannerComponent},
			{path: 'card-list', component: CardComponent}
		]
	},

];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {

}