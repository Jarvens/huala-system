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

    //默认菜单
    defaultMenu: string = '首页';
    //父级菜单
    @Input() parentMenu: string = '';
    //子菜单
    @Input() childrenMenu: string = '';

    ngOnChanges(changes): void {
        let chng = changes['parentMenu'];
        if (chng.currentValue != chng.previousValue) {
            this.parentMenu = chng.currentValue;
        }
    }

}