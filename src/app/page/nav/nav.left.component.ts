import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {MenuService} from '../../service/menu.service';
@Component({
    selector: 'nav-left-component',
    templateUrl: 'nav.left.component.html',
    styleUrls: ['nav.left.component.css']
})

export class NavLeftComponent implements OnInit {
    @Output() currentMenuNameOut = new EventEmitter<Array<any>>();
    menuList: Array<any> = [];
    currentMenuId: string = '';
    currentMenuArray: Array<string> = [];

    ngOnInit(): void {
        this.menuService.menuList().subscribe(res=> {
            this.menuList = res.json();
        });
    }

    constructor(private menuService: MenuService) {
    }

    openMenuChild(menu: any) {
        if (this.currentMenuId === menu.id) {
            this.currentMenuId = "";
        } else {
            this.currentMenuId = menu.id;
        }
        this.currentMenuArray = [];
        this.currentMenuArray.push(menu.name);
        this.currentMenuNameOut.emit(this.currentMenuArray);
    }
}