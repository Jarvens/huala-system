import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {MenuService} from '../../service/menu.service';
@Component({
    selector: 'nav-left-component',
    templateUrl: 'nav.left.component.html',
    styleUrls: ['nav.left.component.css']
})

export class NavLeftComponent implements OnInit {
    //父节点菜单
    @Output() parentMenu = new EventEmitter<string>();
    //子节点菜单
    @Output() childrenMenu: string = '';
    menuList: Array<any> = [];
    currentMenuId: string = '';

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
        //向上溢出父级菜单
        this.parentMenu.emit(menu.name);
        console.log("向上传递");
        console.log(menu.name);
    }
}