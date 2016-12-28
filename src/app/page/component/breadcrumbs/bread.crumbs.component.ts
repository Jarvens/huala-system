import {Component, Input, OnChanges} from '@angular/core';
@Component({
    selector: 'bread-crumbs-component',
    templateUrl: './bread.crumbs.component.html'
})

/**
 * BreadCrumbs  导航
 *
 */
export class BreadCrumbsComponent implements OnChanges {

    @Input() currentMenuName: Array<string> = [];
    menuList: Array<string> = [];

    ngOnChanges(changes): void {
        let chng = changes['currentMenuName'];
        console.log(chng);
        if (chng.currentValue != chng.previousValue) {
            this.menuList =['首页','活动管理'];
            let newMenu: Array<string> = this.menuList.concat(this.currentMenuName);
            this.menuList = newMenu;
            console.log(this.menuList);
        }
    }

}