import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../service/login.service';
@Component({
	selector: 'login-component',
	templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
	token: string = '';
	user: any = {};
	showAlert: boolean = false;

	constructor (private router: Router, private loginService: LoginService) {
	}

	ngOnInit (): void {
		this.token = window.localStorage.getItem("hl-token");
		if(!this.token) {
			this.router.navigate(['/login']);
		} else {
			this.router.navigate(['/index/chart']);
		}
	}

	//登录
	login () {
		this.loginService.login(this.user).subscribe(res=> {
			let ret = res.json();
			if(ret.success) {
				window.localStorage.setItem("hl-token", ret.token);
				this.router.navigate(['/index/chart']);
			} else {
				this.showAlert = !this.showAlert;
			}
		});
	}

	//关闭登录Toast
	onClose (reason: string) {
		this.showAlert = false;
	}

}