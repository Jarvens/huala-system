import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../service/menu.service';
@Component({
	selector: 'nav-left-component',
	templateUrl: 'nav.left.component.html',
	styleUrls: ['nav.left.component.css']
})

export class NavLeftComponent implements OnInit {
	menuList: Array<any> = [];
	currentMenuId: string = '';

	ngOnInit (): void {
		this.menuService.menuList().subscribe(res=> {
			this.menuList = res.json();
		});
	}

	constructor (private menuService: MenuService) {
	}

	openMenuChild (menu: any) {
		this.currentMenuId = menu.id;
	}

}