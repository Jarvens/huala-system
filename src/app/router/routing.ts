//路由
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../page/login/login.component';
import {IndexComponent} from '../page/index/inde.component';
import {ActivityComponent} from '../page/activtity/activity.component';
const routes: Routes = [
	{path: '', redirectTo: '/login', pathMatch: 'full'},
	{path: 'login', component: LoginComponent},
	{
		path: 'index', component: IndexComponent,
		children: [
			{path: 'activity', component: ActivityComponent}
		]
	},

];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {

}