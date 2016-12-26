import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
	selector: 'nav-top-component',
	templateUrl: 'nav.top.component.html',
	styleUrls: ['./nav.top.component.css']
})

export class NavTopComponent implements OnInit {
	placement: string;
	settingOpen = false;
	tipOpen = false;
	opened: boolean = false;
	required: boolean = true;
	ngOnInit (): void {
	}

	constructor (private router: Router) {

	}

	//设置tips打开或关闭
	settingChange (placement: string) {
		this.settingOpen = !this.settingOpen;
		this.placement = placement;
	}

	//消息tips打开或关闭
	tipChange () {
		this.tipOpen = !this.tipOpen;
	}

	//登出
	logout () {
		window.localStorage.removeItem("hl-token");
		this.router.navigate(['/login']);
	}

	//打开修改密码模态
	openModifyPassword () {
		this.opened = !this.opened;
		this.settingOpen = !this.settingOpen;
	}

	//关闭修改密码模态
	cancel () {
		this.opened = !this.opened;
	}

}