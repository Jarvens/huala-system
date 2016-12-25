import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
	selector: 'login-component',
	templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
	ngOnInit (): void {
	}
	constructor (private router:Router) {
	}

	login(){
		this.router.navigate(['/index']);
	}

}